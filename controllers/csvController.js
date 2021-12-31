const Medicine = require("../models/medicine");

const fs = require('fs');

// action function to create csv files and responsing with that
module.exports.File = async function (req, res) {
  try {
    // fetching the data from the data base server
    const medicine = await Medicine.find({});

      // creating the csv file data here only 
    let entry = "";
    let fileData = "c_name,c_batch_no,d_expiry_date,n_balance_qty, c_packaging,c_unique_code,c_schemes,n_mrp,c_manufacturer,hsn_code,"
    for(let tablet of medicine){
        // adding each tablet details to entry according to row 
        entry = tablet.c_name+","+tablet.c_batch_no+","+tablet.d_expiry_date+","+tablet.n_balance_qty+","+
        tablet.c_packaging+","+tablet.c_unique_code+","+tablet.c_schemes+","+tablet.n_mrp+","+
        tablet.c_manufacturer+","+tablet.hsn_code;
        fileData+="\n"+entry;
    }
    const file = fs.writeFile('assets/Data.csv',fileData,(err,data)=>{
      if(err){
          return res.redirect('/');
      }
      return res.download('assets/Data.csv');
    });
  } 
  catch (err) {
    console.log("Error******************",err);
  }
};