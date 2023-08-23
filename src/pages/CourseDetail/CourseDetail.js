import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import './coursedetail.scss';
function CourseDetail() {
    const {slug} = useParams();
    const [course,setCourse] = useState({});
    const [userRole,setUserRole] = useState(null);
    useEffect(()=>{
      const fetchCourse = async()=>{
        const response = await axios.get(`http://localhost:5000/courses/${slug}`,{withCredentials:true})
        .then(response=>{
          console.log(response.data);
          setCourse(response.data.course);
        })
      }
      const fetchRole = async()=>{
        const response = await axios.get("http://localhost:5000/userin",{withCredentials:true})
        console.log(response.data);
        setUserRole(response.data.role)
      }
      fetchCourse();
      fetchRole();
    },[slug])
  return (
    <div>
      <div className='coursesImage'></div>
      <div className='courseContainer'>
        <div className='courseImage'></div>
        <div className='courseDetail'>
          <div className='courseName'>{course.name}</div>
          <div className='courseDesc'>{course.description}</div>
        </div>
        {userRole ==="student" && (
        <>
        <form method='POST' action='http://localhost:5000/courses/enroll'>
          <input type = "hidden" name ="course_id" value = {course._id}></input>
          <button type = "submit">Enroll</button>
        </form>
        </>
      )}
      </div>
    </div>
  )
}

export default CourseDetail
