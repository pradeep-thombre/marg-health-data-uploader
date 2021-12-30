const express= require("express");
const router = express.Router() ;
const app = express();


const fileController = require("../controllers/index") ;
const upload = require("../config/multer");


router.use('/api',require('./api'));
router.get("/" ,fileController.homePage);

router.post("/upload",upload.single("file"),fileController.uploadFile );
router.get("/remove/:id",fileController.removeFile );
router.get("/view-file", fileController.viewFile)



module.exports = router ;