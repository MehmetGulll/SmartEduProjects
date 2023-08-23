const userController = require('../controllers/userController.js');
const express = require('express');


const router = express.Router();

router.route('/signup').post(userController.createUser);
router.route('/login').post(userController.loginUser);
router.route('/usercourse').get(userController.userCourses);



module.exports=router;