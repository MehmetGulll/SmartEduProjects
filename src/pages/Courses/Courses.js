import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom';
import './courses.scss';
import axios from 'axios';
function Courses() {
    const [courses,setCourses] = useState([])
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        const fetchCourses = async()=>{
            await axios.get("http://localhost:5000/courses")
            .then(response=>{
                console.log(response.data);
                setCourses(response.data.courses);
            })
        }
        const fetchCategories = async()=>{
            await axios.get("http://localhost:5000/category")
            .then(response=>{
                console.log(response.data);
                setCategories(response.data.categories);
            })
        }
        fetchCourses();
        fetchCategories();
    },[])
  return (
    <div className='coursesMainContainer'>
        <div className='coursesImage'>
            <div className='coursesImageTag'>Courses</div>
            <div className='coursesImageText'>Lorem Ipsum Dolroin Gravida Nibh Vel Velit</div>
        </div>
        <div className='courseText'>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!</div>
        <div className='courseSearch'>
            <div className='searchIcon'></div>
            <form method='GET' action='http://localhost:5000/courses'>
                <input type = "search" name="search"/>
            </form>
        </div>
        <div className='categoriesMainContainer'>
            {
                categories.map(category =>(
                    <NavLink to = {`/category/${category.slug}`} key={category._id} className={"categoryLink"}>
                        <div className='categoryContainer'>
                            <div className='categoryDetails'>
                                <div className='categoryName'>{category.name}</div>
                            </div>
                        </div>
                    </NavLink>
                ))
            }
        </div>
        <div className='courseMainContainer'>
        
            {
                
                courses.map(course=>(
                    <NavLink to = {`/courses/${course.slug}`} key ={course._id} className={"courseLink"}>
                    <div className='courseContainer' >
                        <div className='courseImage'></div>
                        <div className='courseDetails'>
                            <div className='courseTag'>{course.name}</div>
                            <div className='courseDesc'>{course.description}</div>
                        </div>
                        <div className='coursePerson'>Kişi sayısı:6</div>
                    </div>
                    
                    </NavLink>
                ))
                
               
            }
            
            
            {/* <div className='courseContainer'>
                <div className='courseImage'></div>
                <div className='courseDetails'>
                    <div className='courseTag'>Java101</div>
                    <div className='courseDesc'>Lorem ipsum door sit amet, fugiat deicata avise id cum, no quo maiorum intel ogrets geuiat operts elicata libere avisse id cumlegebat, liber regione eu </div>
                </div>
                <div className='coursePerson'>Kişi sayısı:6</div>
            </div> */}
        </div>
    </div>
  )
}

export default Courses
