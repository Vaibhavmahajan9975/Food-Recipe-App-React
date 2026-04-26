const express= require('express');
const app= express();
const router = express.Router();
const infoSchemacopy=require('./model/infoschema')
// var bodyParser= require('body-parser');
// // const { urlencoded } = require('body-parser');
// var encoder = bodyParser.urlencoded();

router.post('/signup',(request,response)=>{
    const infoUser= new infoSchemacopy({
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    infoUser.save().then(data=>{
        response.json(data) })
        .catch(error=>{
            response.json(error)
        })
})
module.exports= router