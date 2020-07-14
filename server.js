var express = require("express")
var app = express()
var PORT = process.env.PORT || 3001
var mongoose = require("mongoose")
var routes = require("./routes/apiroutes")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routes)


mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost/restaurants").then(()=>{
console.log(process.env.MONGODB_URI)});
app.listen(PORT, function(){
    console.log("app is listening on port" + PORT)
})
