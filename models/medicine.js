const mongoose = require("mongoose") ;
const {Schema} = mongoose ;


// creating schema for file 
const fileSchema = new Schema ( {
    c_name:{
        type:String,
    },
    c_batch_no: {
        type: String
    },
    d_expiry_date:{
        type:String,
    },
    n_balance_qty: {
        type: Number
    },
    c_packaging:{
        type:String,
    },
    c_unique_code: {
        type: String
    },
    c_schemes:{
        type:String,
    },
    n_mrp: {
        type: Number
    },
    c_manufacturer: {
        type: String
    },
    hsn_code:{
        type:String,
    },
},
{
    timestamps:true 
}) ;

const Medicine = mongoose.model("Medicine",fileSchema);

module.exports = Medicine ;