const shortid=require('shortid')
const URL= require('../model/url')
async function handleGenerateShortUrl(req,res) {
    const body=req.body
    console.log(body)
    if(!body.url)return res.status(400).json({error:"URL is required"})
        
        
    const shortID=shortid()
    await URL.create({
        shortId:shortID,
        redirectUrl:body.url,
        visitHistory:[]
    })
    return res.json({id:shortID})
}

async function redirectToUrl(req,res) {
     const shortId=req.params.shortId 
     console.log(shortId);
     
    const entry=await URL.findOneAndUpdate({shortId},
        {$push:{visitHistory:{timestamp:Date.now()}}})
    // if(!entry) res.status(400)
    console.log(entry);
     res.redirect(entry.redirectUrl)
}

async function getAnalytics(req,res) {
     const shortId=req.params.shortId 
     console.log(shortId);
     
    const entry=await URL.findOne({shortId})
    res.json({redirectUrl:entry.redirectUrl,visitedCount:entry.visitHistory.length,analytics:entry.visitHistory})
}

module.exports={handleGenerateShortUrl,redirectToUrl,getAnalytics}