const mongoose = require('mongoose')

const doctorUsersSchema = new mongoose.Schema({
    name:String,
    sp:String
   
})


const DoctorModel = mongoose.model("docs",doctorUsersSchema)
module.exports = DoctorModel