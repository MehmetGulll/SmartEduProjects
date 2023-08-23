const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const slugify=require('slugify');


const CourseSchema = new Schema({
    name :{
        type : String,
        required:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    createdAt:{
        type : Date,
        default : Date.now
    },
    slug:{
        type:String,
        unique:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
})

CourseSchema.pre('validate',function(next){
    if(!this.name || typeof this.name !== 'string'){
        console.log("name must be a string");
    }
    else{
        this.slug = slugify(this.name,{
            lower:true,
            strict:true
        });
        next();
    }
    
})

const Course = mongoose.model("Course",CourseSchema);
module.exports=Course;