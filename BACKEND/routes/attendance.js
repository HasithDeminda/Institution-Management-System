//import router package
const router = require ("express").Router();
let Attendance = require ("../models/Attendance");



router.route("/add").post((req,res)=> {

    const classid = req.body.classid;
    const date = req.body.date;
    const totalStudents = req.body.totalStudents;
    const attendance = req.body.attendance;
    const link = req.body.link;

    const newAttendance = new Attendance({

        classid,
        date,
        totalStudents,
        attendance,
        link

    })

    //Javascript promise(like if else)
    newAttendance.save().then(()=> {
        res.json("Attendance Added") //send the message as json format
    }).catch((err)=>{
        console.log(err);
    })

})

// //Get all students route

// router.route("/").get((req,res)=> {

//     Attendance.find().then((attendance)=> {
//         res.json(attedance)
//     }).catch((err)=> {
//        console.log(err) 
//     })

// })

// //Update One Student route

// router.route("/update/:id").put(async (req, res) => {
//     let userId = req.params.id;
//     const {name, age, gender, address} = req.body; //Destructure

//     const updateStudent = {
//         name,
//         age,
//         gender,
//         address
//     }

//     const update = await Student.findByIdAndUpdate (userId, updateStudent)
//     .then(()=> {
//         res.status(200).send({status:"User Updated"})
//     }).catch ((err)=> {
//         console.log(err);
//         res.status(500).send({status: "Error with updating data", error:err.message});
//     })

// })

//Delete attendance from DB

//  router.route ("/delete/:id").delete(async (req, res) => {
//      let userId = req.params.id;

//      await Student.findByIdAndDelete(userId)
//      .then(()=> {
//          res.status(200).send ({status: "User deleted"});
//      }).catch ((err)=> {
//          console.log(err.message);
//          res.status(500).send ({status: "Error with delete user",error: err.message});
//      })
//  })

// //Get one student route

// router.route("/get/:id").get (async (req, res) => {
//     let userID = req.params.id;
//     const user = await Student.findById(userId)
//     .then((student)=> {
//         res.status(200).send({status: "User fetched", student})
//     }).catch((err)=> {
//         console.log(err.message);
//         res.status(500).send ({status: "Error with get user", error:err.message});
//     })
// })

module.exports = router;