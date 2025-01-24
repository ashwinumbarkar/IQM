const express =require('express')
const router =express.Router();
const { addInterviewData,getAllInterviewData}=require('../controllers/questiondata.controller')

router.post('/InterviewQs',addInterviewData)
router.get('/getInterviewQs',getAllInterviewData)

module.exports=router