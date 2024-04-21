const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const DoctorModel = require('./models/doctorUsers')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://senurak306:1097822801255738429@cluster0.yfh1ciw.mongodb.net/")


app.get("/" , (req,res) => {
    DoctorModel.find({})
    .then(docs => res.json(docs))
    .catch(err => res.json(err))
})




app.get("/getDoctor/:id" , (req,res) => {
    const id = req.params.id;
    DoctorModel.findById({_id:id})
    .then(docs => res.json(docs))
    .catch(err => res.json(err))

    
})

app.put('/updateDoctor/:id' , (req,res) => {
    const id = req.params.id;
    
    DoctorModel.findByIdAndUpdate({_id: id},{
        name: req.body.name , 
        sp: req.body.sp
       
    })
    .then(docs => res.json(docs))
    .catch(err => res.json(err))
})

app.post("/Createdoctor" , (req,res) => {
    DoctorModel.create(req.body)
    .then(docs => res.json(docs))
    .catch(err => res.json(err))
    
})





app.delete('/deleteDoc/:id' , (req,res) => {
    const id = req.params.id;
    DoctorModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.listen(3001 , () => {
    console.log("Server is running")
})
