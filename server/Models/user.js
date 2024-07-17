const mongoose = require("mongoose");

const userdata = new mongoose.Schema({
    
    name:{

        type:String,
        required:true
    },

    age:{
        
        type:Number,
        required:true
    },

    phone:{
        
        type:Number,
        required:true
    },

    address:{
        
        type:String,
        required:true
    },

    time:{
        
        type:String,
        required:true
    },

})

const usermodel = mongoose.model("insurancedata",userdata);

module.exports = usermodel;
