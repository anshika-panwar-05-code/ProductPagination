 require('dotenv').config();
const express= require('express');
const cors= require('cors');
const { json } = require('body-parser');
const connectDB = require('./config/db');
const ProductRoutes = require('../product/routes/ProductRoutes')



const app= express();
connectDB();



app.use(express.json())
app.use(cors());


app.use('/api',ProductRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
