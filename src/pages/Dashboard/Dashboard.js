import React,{useEffect,useState} from 'react'
import Modal from 'react-modal'
import './dashboard.scss';
import axios from 'axios';
function Dashboard() {
    const [userRole,setUserRole] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [categories,setCategories] = useState([]);
    const [userCourse,setUserCourse] = useState([])
    useEffect(()=>{
        const fetchUserIn = async()=>{
            try {
                const response = await axios.get("http://localhost:5000/userin", {withCredentials:true})
                setUserRole(response.data.role);
            } catch (error) {
                console.log(error);
            }
        }
        const fetchCategories = async()=>{
          try {
            const response = await axios.get("http://localhost:5000/category",{withCredentials:true})
            setCategories(response.data.categories);
          } catch (error) {
            console.log(error)
          }
        }
        fetchCategories();
        fetchUserIn();
    }) 
  return (
    <div>
      <div className='dashboardImage'>
        <div className='dashboardImageTag'>{userRole}</div>
      </div>
      {userRole ==="teacher" && (
          <>
          
            <button type ="submit" name="createcourse" onClick={()=> setModalIsOpen(true)}>Create New Course</button>
            <Modal isOpen={modalIsOpen} ariaHideApp={false}>
              <h2>Create New Course</h2>
              <form method='POST' action='http://localhost:5000/courses'>
                <input type = "hidden" name = "role" value = {userRole}></input>
                <label>Course Name:
                  <input type = "text" name = "coursename"/>
                </label>
                <br/>
                <label>
                  Course Description:
                  <input type = "text" name = "coursedescription"/>
                </label>
                <br/>
                <label>
                  Select Category
                  <select className='selectCategory' name = "category">
                   {categories.map(category=>(
                    <option value = {category._id}>{category.name}</option>
                   ))}
                  </select>
                </label>
                <input type = "submit" value = "submit"/>
              </form>
              <button type="button" onClick={()=>setModalIsOpen(false)}>Close</button>
            </Modal>
          
          </>
      )}
    </div>
  )
}

export default Dashboard
