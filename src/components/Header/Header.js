import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {ImExit} from 'react-icons/im';
import {SlLogin} from 'react-icons/sl';
import {NavLink} from 'react-router-dom';
import './header.scss';
function Header() {
  const [userIN,setUserIN] = useState(null);
  const outUser = async()=>{
    try {
      const response = await axios.get("http://localhost:5000/logout",{withCredentials:true})
      setUserIN(null);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    const fetchUserIn = async()=>{
      try {
        const response = await axios.get("http://localhost:5000/userin",{withCredentials:true});
        setUserIN(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserIn();
  },[])
  return (
    <div className='headerContainer'>
      {userIN &&(
        <>
         <div className='headerLogo'>SmartEdu</div>
         <div className='headerLinks'>
           <NavLink to ="/" className='headerLink'>Home</NavLink>
           <div className='headerLink'>About Us</div>
           <NavLink to = "/courses" className='headerLink'>Courses</NavLink>
           <div className='headerLink'>Contact</div>
           <NavLink to = "/dashboard" className='headerLink'>Dashboard</NavLink>
           <NavLink to = "/" className='headerLink' onClick={outUser}><ImExit/></NavLink>
          </div>
          </>
      )}
      {!userIN && (
        <>
        <div className='headerLogo'>SmartEdu</div>
        <div className='headerLinks'>
        <NavLink to ="/" className='headerLink'>Home</NavLink>
        <div className='headerLink'>About Us</div>
        <NavLink to = "/courses" className='headerLink'>Courses</NavLink>
        <div className='headerLink'>Contact</div>
        <NavLink to = "/signup" className='headerLink'>Sign Up</NavLink>
        <NavLink to = "/login" className='headerLink'><SlLogin/></NavLink>
      </div>
        </>
      )}
      
    </div>
  )
}

export default Header
