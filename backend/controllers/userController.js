const User = require('../models/User.js');
const Category = require('../models/Category.js');
const bcrypt = require('bcrypt');
const Course = require('../models/Course.js');
exports.createUser = async(req,res)=>{
    try {
        const user = await User.create(req.body);
        res.redirect("http://localhost:3000");
    } catch (error) {
        res.status(400).json({
            status:"fail",
            error
        })
    }
}
exports.loginUser = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user =  await User.findOne({email})
            if(user){
                const same = await bcrypt.compare(password,user.password)
                    if(same){
                        req.session.userID  = user._id;
                        console.log("Login Succes");
                        console.log(user._id)
                        res.redirect("http://localhost:3000")
                    }
                    else{
                        res.status(400).json({
                            status:"fail",
                            error:'Incorrect password'
                        })
                    }
                
            }
        
    } catch (error) {
        res.status(400).json({
            status:"fail",
            error
        })
    }
}
exports.logOutUser = async(req,res)=>{
    res.session.destroy(()=>{
        console.log("out success");
        res.redirect("http://localhost:3000");
    })
    
}

exports.userCourses = async(req,res)=>{
    const courses = await Course.find({user:req.session.userID})
    res.status(200).json({
        courses:courses
    });
}
