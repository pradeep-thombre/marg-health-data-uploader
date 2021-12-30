// importing all required library and files 
const Medicine = require("../models/medicine");
const csv = require("csvtojson");
const upload = require("../config/multer");
const { render } = require("express/lib/response");

// rendering home page 
module.exports.edit =async (req, res) => {
    try{
        data=req.body;
        medicine=await Medicine.findByIdAndUpdate(data._id,data);
        return res.redirect('back');
    }catch(err){
        console.log(err);
    }
}

// rendering home page 
module.exports.searchById = async (req, res) => {
    try{
        let medicine=await Medicine.findById(req.params.id);
        return res.status(200).json(medicine);
    }catch(err){
        return res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
}

module.exports.delete = async (req, res) => {
    data=req.body;
    try{
        let medicine=await Medicine.findByIdAndDelete(req.params.id);
        if(medicine){
            return res.status(200).json({
                message:"Data deleted successfully!"
            });
        }
        return res.status(200).json({
            message:"Data not found with this id!",
        });
    }catch(err){
        return res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
}

// upload file action 
module.exports.uploadFile =async (req, res) => {
    try {
        
        upload.single("file");
        // converting csv data into array of json object 
        const dataArr = await csv().fromString(req.file.buffer.toString());

        // Create new file
        try{
            await Medicine.deleteMany({});
        }catch(err){
            console.log(err);
        }
        console.log(dataArr.length);
        for(let item of dataArr){
            await Medicine.create(item);
            
            // console.log(item);
        }
        console.log("data uploaded successfully");
        return res.redirect('back');
    } catch (err) {
        console.log("err",err);
    }
}
module.exports.getAll = async (req, res) => {
    try{
        let medicines = await Medicine.find({});
        if(medicines){
            return res.status(200).json(medicines);
        }
        return res.status(404).json({
            message: "Matching data not found"
        });
    }catch(err){
        return res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
}

//removing file
module.exports.searchByNameOrBatchNumber = async (req, res) => {
    try{
        const medicines = await Medicine.find({c_name:req.query.name } , { c_batch_no:req.query.batch});
        if(medicines){
            return res.status(200).json(medicines);
        }
        return res.status(404).json({
            message: "Matching data not found"
        });
    }
    catch(err){
        return res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
}
