var mongoose = require ("mongoose")
var Schema = mongoose.Schema
var restaurantSchema = new Schema({
    type:{
        type: String
    },
    name:{
        type:String
    },
    price:{
        type:Schema.Types.Decimal128
    },
    quantity:{
        type:Number
    },

})
var Restaurant = mongoose.model("Restaurant", restaurantSchema)
module.exports = Restaurant
