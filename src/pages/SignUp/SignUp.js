import React from 'react'
import './signup.scss';
function SignUp() {
  return (
    <div className='signupMainContainer'>
        <h3>Sign Up</h3>
        <div className='signupContainer'>
            <form method='POST' action='http://localhost:5000/users/signup' className='registerPost'>
                <div className='registerContainer'>
                    <input type = "text" name="name" placeholder='Name' />
                    <input type = "email" name="email" placeholder='Email'/>
                    <select name="role">
                      <option>student</option>
                      <option>teacher</option>
                      <option>admin</option>
                    </select>
                    <input type = "password" name="password" placeholder='Password'/>
                    <input type = "submit" className='registerButton'/>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default SignUp
