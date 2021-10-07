const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({

    fName : {
        type : String,
        //required : true
    },

    lName : {
        type : String,
        //required : true
    },

    title : {
        type : String,
        //required : true
    },

    gender : {
        type : String,
        //required : true
    },

    nic : {
        type : String,
        //required : true
    },

    mobileNo : {
        type : Number,
        //required : true
    },

    email : {
        type : String,
        //required : true
    },

    regNo : {
        type : String,
        //required : true
    },

    classId : {
        type : String,
        //required : true
    },

    firstUN : {
        type : String,
        //required : true
    },

    firstPW : {
        type : String,
        //required : true
    },

    reFirstPW : {
        type : String,
        //required : true
    },

})

//MongoDB collection 
const Teacher = mongoose.model("collection_teacher", teacherSchema);

module.exports = Teacher;