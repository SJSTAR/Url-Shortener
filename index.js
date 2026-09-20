const express= require('express')
const PORT = process.env.PORT || 8001;
const app=express();
// const DbUrl=''
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("MONGODB_URI is not configured");
  process.exit(1);
}

const {connectDB}= require('./connect')
const router=require('./routes/url')
app.use(express.json()) 
connectDB(MONGODB_URI)
// connectDB('mongodb://localhost:27017/short-url')
app.use('/url',router)



app.listen(PORT,"0.0.0.0",()=>console.log('Server Started'));

