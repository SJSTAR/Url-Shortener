const express= require('express')
const PORT= 8001
const app=express();

const {connectDB}= require('./connect')
const router=require('./routes/url')
app.use(express.json()) 
connectDB('mongodb://localhost:27017/short-url')
app.use('/url',router)



app.listen(PORT,()=>console.log('Server Started'));

