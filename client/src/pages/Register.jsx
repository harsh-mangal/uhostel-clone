import React from 'react'

import { Link } from 'react-router-dom'

const Password = () => {
  return (
    <div>
        <div className="navbar">
        <div className="navbar-brand">
          <Link to="/admin">
            {" "}
            <img
              src="https://uhostel.chitkara.edu.in/student/images/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/register">New Student</Link>
            </li>
            <li>
              <Link to="/admin">Approve Gatepass</Link>
            </li>
            <li>
              <Link to="/admin">Student List</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="panel1">
        <div>
          <img
            src="https://uhostel.chitkara.edu.in/student/images/user5.png"
            alt=""
          />
        </div>
        <div>
          <h4>Hi,HARSH MANGAL</h4>
          <h3>ADMIN</h3>
          <h3>WARDEN SECTION</h3>
        </div>
      </div>
        <div className='passpanel'>
            <h4>Name</h4>
            <input type="name" placeholder='Enter your Name'/>
            <br />
            <h4>Roll Number</h4>
            <input type="number" placeholder='Enter your Roll Number'/>
            <br />
            <h4>Room Number</h4>
            <input type="number" placeholder='Enter your Room Number'/>
            <h4>Password</h4>
            <input type="password" placeholder='Confirm new password'/>
            <button className='sbp'>Submit</button>
        </div>
       
    </div>
  )
}

export default Password