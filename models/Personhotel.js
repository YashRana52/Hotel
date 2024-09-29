const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String,
    },
    salary:{
        type:String,
        require:true,
    }

})
//Create person model
const Person = mongoose.model('person',personSchema)
module.exports = Person;