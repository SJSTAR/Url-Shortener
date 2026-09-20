const mongoose=require('mongoose')

async function connectDB(url) {
    console.log(url);
    
    mongoose.connect(url)
}

module.exports={connectDB}