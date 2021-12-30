const express= require("express");
const router = express.Router() ;
const app = express();


const apiContoller = require("../../controllers/apiContoller") ;
const upload = require("../../config/multer");


router.post("/uploadCSV",upload.single("file"),apiContoller.uploadFile );
router.get("/searchByNameOrBatchNumber",apiContoller.searchByNameOrBatchNumber );
router.get("/getAll", apiContoller.getAll);
router.post("/edit",apiContoller.edit);
router.get("/delete/:id",apiContoller.delete);
router.get("/searchById/:id",apiContoller.searchById);
module.exports = router ;