const express = require('express')
const env = require('dotenv').config()
const cors = require("cors");
const {loginUserService} = require('./services/login-user')
const {registerUserService} = require('./services/registerUser')

const app = express()
app.use((req,_,next)=>{
    console.log(req.url)
    next()
})
app.use(express.json()) 
app.use(cors())
app.post('/login',(req,res)=>{
    const email = req.body.email
    const pass = req.body.pass

    loginUserService(email,pass)
    .then((token)=>{res.send({token})})
    .catch((err)=>{
        console.log('err on login: ',err)
        res.status(400).send({err:err.message})
    })
}) 
app.post('/register',(req,res)=>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const newEmail = req.body.newEmail
    const newPass = req.body.newPass
    console.log(firstName,lastName,newEmail,newPass)
    registerUserService(firstName,lastName,newEmail,newPass)
})
const PORT = 8080
app.listen(PORT,()=>{console.log("on: ",PORT)})  