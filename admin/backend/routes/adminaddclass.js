
const GetClass = require("../models/GetClassModel");
const router = require("express").Router();



// const storage = multer.diskStorage({

//     destination:(req,file,callback)=>{
//         callback(null,"../frontend/src/assets/upload")
//     },

//     filename:(req,file,callback)=>{
//         callback(null,file.originalname);
//     }
// })



// const upload = multer({storage:storage});



router.route("/getAddClass").get((req,res)=>{
    GetClass.find().then((getclass)=>res.json(getclass))
})



module.exports = router;