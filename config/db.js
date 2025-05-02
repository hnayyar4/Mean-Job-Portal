const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/jobhunt")
.then(()=>{
    console.log("DATABASE IS CONNECTED SUCCESSFULLY");

})
.catch((err)=>{
    console.log("DATABASE CONNECTION FAILED");
    console.log(err);
})