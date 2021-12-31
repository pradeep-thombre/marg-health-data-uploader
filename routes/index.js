const express= require("express");
const router = express.Router() ;
const app = express();


const csvController= require('../controllers/csvController');
const fileController = require("../controllers/index") ;
const upload = require("../config/multer");


router.use('/api',require('./api'));
router.get("/" ,fileController.homePage);

router.get("/view-file", fileController.viewFile)



// this url is called to download data in scv format 
router.get('/download',csvController.File);

module.exports = router ;