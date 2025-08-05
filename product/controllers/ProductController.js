const mongoose = require('mongoose');
const Product = require('../models/Product');

exports.createProduct=async(req,res)=>{

   try {
     const data = req.body;
    const product = await Product.create(data);
    res.status(201).json(product);
    
   } catch (error) {
    console.log("not create",error);

    
   }
}
exports.getProduct= async(req,res)=>{
    try {
        const page= parseInt(req.query.page)||1;
        const limit= parseInt(req.query.limit)||10;
        const sort= req.query.sort||'createdAt'
        // const sortOrder= req.query.order==="desc"?-1:1;
         let sortOrder;
         if(req.query.order==="desc"){
            sortOrder =-1;
         }else{
            sortOrder = 1;
         }


        const skip=(page-1)*limit;
        const totaldocument= await Product.countDocuments();

        const product= await Product.find().sort({ [sort]: sortOrder }).skip(skip).limit(limit);
        res.status(200).json({
            totaldocument:totaldocument,
            page,
            limit,
            totalPages:Math.ceil(totaldocument/limit),
            product,
        });
        
    } catch (error) {
        console.log("not able to get the user",error);
        
    }
}



