const express= require('express')
const router= express.Router()

const {handleGenerateShortUrl,redirectToUrl,getAnalytics}=require('../controller/url')

router.post('/',handleGenerateShortUrl)
router.get('/:shortId',redirectToUrl)
router.get('/analytics/:shortId',getAnalytics)

module.exports=router