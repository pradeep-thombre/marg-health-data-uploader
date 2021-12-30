// importing all required library and files 
// const File = require("../models/file");
const csv = require("csvtojson");
const upload = require("../config/multer");

// rendering home page 
module.exports.homePage = async (req, res) => {
    res.render("homepage");
}

// upload file action 
module.exports.uploadFile =async (req, res) => {
    try {
        upload.single("file");
        // converting csv data into array of json object 
        const dataArr = await csv().fromString(req.file.buffer.toString());
        // returning to view files page to show data 
        return res.redirect("/view-file?fileId="+file._id);
    } catch (err) {
        console.log("err",err);
    }
}
module.exports.viewFile = async (req, res) => {
    res.render("table", {homeLink:true})
}

//removing file
module.exports.removeFile = async (req, res) => {
    // removing file 
    const file = await File.findByIdAndDelete(req.params.id);
    return res.redirect('/');
}