const courseController = require("../controllers/courseController.js");
const roleMiddleware = require("../middlewares/roleMiddlewares.js");
const express = require('express');
const router = express.Router();


router.route('/').post(roleMiddleware(["teacher","admin"]),courseController.createCourse);
router.route('/').post(courseController.createCourse);
router.route('/').get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getCourse);
router.route('/enroll').post(courseController.enrollCourse);
module.exports = router;