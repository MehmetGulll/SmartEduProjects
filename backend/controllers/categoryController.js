const Category = require('../models/Category.js');

exports.createCategory = async(req,res)=>{
    try {
        const category = await Category.create(req.body);
        res.status(200).json({
            status:"succes",
            category:category
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            error:error.message
        })
        console.log(error)
    }
}
exports.getAllCategories = async(req,res)=>{
    try {
        const categories = await Category.find();
        res.status(200).json({
            status:"succes",
            categories:categories
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            error:error.message
        })
    }
}
