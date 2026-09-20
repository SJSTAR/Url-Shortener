
const express= require('express')
const PORT = process.env.PORT || 8001;
const path = require('path')
const app=express();
// const MONGODB_URI='mongodb://localhost:27017/short-url'
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("MONGODB_URI is not configured");
  process.exit(1);
}
const {connectDB}= require('./connect')
const router=require('./routes/url')
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))
app.use(express.json()) 
connectDB(MONGODB_URI)
app.use('/url',router)
app.use('/new',(req,res)=>{
    console.log('.sdf')
    return res.render('new')
})
app.use('/',(req,res)=>{
    return res.render('home')
})



app.listen(PORT,"0.0.0.0",()=>console.log('Server Started'));

