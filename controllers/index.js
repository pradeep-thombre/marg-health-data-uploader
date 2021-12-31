// importing all required library and files 
// const File = require("../models/file");
const csv = require("csvtojson");
const upload = require("../config/multer");

// rendering home page 
module.exports.homePage = async (req, res) => {
    res.render("homepage");
}


module.exports.viewFile = async (req, res) => {
    res.render("table", {homeLink:true})
}

