const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userLoginer = require('./Routes/User_login')
const cors = require('cors');

app.use("*",cors({
    origin: true,
    credentials: true
}));

app.use(express.json())
app.use(cookieParser)
app.use(bodyParser.urlencoded({extended:true}))

app.use('user/login',userLoginer)



app.listen(5000,()=>{
    console.log('Server Listening to Port Number 5000...')
})