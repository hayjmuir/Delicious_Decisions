var db = require("../models")
const { get } = require("http")
function apiroutes(app) {

    app.get("/api/restaurant", function (req, res) {
        db.Restaurant.find().then(function (results) {
            res.json(results)
        })


    })

    app.post("/api/restaurant", function (req, res) {
        db.Restaurant.create(req.body).then(function (results) {
            res.json(results)
        })
    })

    app.put("/api/restuarant/:id", function (req, res) {
        db.Restaurant.update({ _id: req.params.id }).then(function (results) {
            res.json(results)
        })
    })
    app.delete("/api/restaurant/:id", function (req, res) {
        db.Restaurant.remove({ _id: req.params.id }).then(function (results) {
            res.json(results)
        })

    })


}

module.exports = apiroutes