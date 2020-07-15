var db = require("../models")
var router =require("express").Router()
var path = require("path")

    router.get("/api/restaurant", function (req, res) {
        db.Restaurant.find().then(function (results) {
            res.json(results)
        })


    })

    router.post("/api/restaurant", function (req, res) {
        db.Restaurant.create(req.body).then(function (results) {
            res.json(results)
        })
    })

    router.put("/api/restaurant/:id", function (req, res) {
        db.Restaurant.update({ _id: req.params.id }).then(function (results) {
            res.json(results)
        })
    })
    router.delete("/api/restaurant/:id", function (req, res) {
        db.Restaurant.remove({ _id: req.params.id }).then(function (results) {
            res.json(results)
        })

    })

    router.post("/api/order", function (req, res) {
        var order=req.body
        console.log("this is the order", order)
        res.end()
    })


    
    router.get("*", (req,res)=>{
        
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
   })




module.exports = router