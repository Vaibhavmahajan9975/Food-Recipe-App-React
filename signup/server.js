const express = require('express')
const app = express()
const mongoose= require('mongoose')
const dotenv =require('dotenv')
const routesUrl = require('./route')
const Cors = require('cors')





dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log('dB connected'),
{
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
);

app.use(express.json())
app.use(Cors())
app.use('/info', routesUrl)
app.listen(4000, ()=>{
    console.log('port running')})
