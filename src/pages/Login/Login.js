import React from 'react'
import './login.scss';
function Login() {
  return (
    <div className='loginMainContainer'>
      <h3>Login</h3>
        <div className='loginContainer'>
            <form method='POST' action='http://localhost:5000/users/login' className='loginPost'>
                <div className='loginRegisterContainer'>
                   
                    <input type = "email" name="email" placeholder='Email'/>
                    <input type = "password" name="password" placeholder='Password'/>
                    <input type = "submit" className='loginButton' value = "Giriş"/>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Login
