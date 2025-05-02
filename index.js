const express = require("express");
const app = express();
const port = 3005;

var cors = require('cors')

app.use(cors())


const db = require("./config/db")
const seeder = require("./config/seeder")
seeder.adminseeder()


app.use(express.urlencoded({extended:false}))
app.use(express.json({limit:'50mb'}))
app.use(express.static(__dirname+("/public/")))    //To send public folder manually to front end. 
const route = require('./routes/apiRoutes')
app.use('/api',route);

app.get("/home", (req, res)=>{
    res.send("THIS IS A NODE JS PROJECT");
});

app.listen(port,()=>{
    console.log("My project is Running at "+ port);
})


app.get("/" , (req, res)=>{
    res.send("THIS IS NODE JS PROJECT")
})