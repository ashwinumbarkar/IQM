const express =require('express')
const dotenv=require('dotenv')
const cors =require('cors')
const mongoose=require('mongoose')
const AddQuestionRouter=require('./routes/Addquestion.route')
dotenv.config()
const app =express();
mongoose.connect(process.env.DB_URL).then(()=>{console.log("DB connected")}).catch((e)=>{console.log("Error in Connection DB")})
app.use(express.json())
app.use(cors())
app.use('/api',AddQuestionRouter)
app.listen(process.env.PORT, '0.0.0.0',()=>{
    console.log("server is runnint at ",process.env.PORT)
})