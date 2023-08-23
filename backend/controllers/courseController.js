const Category = require('../models/Category.js');
const Course = require('../models/Course.js');
const User  = require('../models/User.js')
const categories = require('./categoryController.js');

exports.createCourse = async(req,res)=>{
    try {
        const courses = await Course.create({
            name : req.body.coursename,
            description:req.body.coursedescription,
            category:req.body.category,
            user : req.session.userID
        });
        res.redirect("http://localhost:3000/courses")
    } catch (error) {
        res.status(400).json({
            status:"fail",
            error:error.message
            
        })
        
    }
}

exports.getAllCourses = async(req,res)=>{

    try{
        const categorySlug = req.query.category;
        const query = req.query.search;
        const category = await Category.findOne({slug:categorySlug})
        if(query){
            filter={name:query}
        }
        if(!query && !categorySlug){
            filter.name="",
            filter.category = null;
        }
        let filter={}
        if(categorySlug){
            filter = {category:category._id}
        }
        const courses = await Course.find()
        res.status(200).json({
            status:"success",
            courses:courses
        })
    }catch(error){
        res.status(400).json({
            status:"fail",
            error
        })
    }
}
exports.getCourse = async(req,res)=>{
    try {
        const course = await Course.findOne({slug:req.params.slug})
        res.status(200).json({
            status:"succes",
            course:course
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            error
        });
    }
}

exports.enrollCourse = async(req,res)=>{
    try {
        const user = await User.findById(req.session.userID);
        await user.courses.push({_id :req.body.course_id});
        await user.save();
        req.session.userID = user._id;
        await req.session.save();
        res.json({
            status:"succes",
            course: req.body.course_id
        })
    } catch (error) {
        console.log(error);
    }
}