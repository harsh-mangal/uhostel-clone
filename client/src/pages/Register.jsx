import React , {useState} from 'react'

import { Link } from 'react-router-dom'

const Password = () => {
  const [formData , setFormData]=useState({
    name:"",
    roomNumber:"",
    rollNumber:"",
    newPassword:""
  });

  const handleChange=(e)=>{
      const {name, value}=e.target;
      setFormData((prevData)=>({
        ...prevData,
        [name]:value
      }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
         alert("DONE");
         
      } else {
        alert("NO");
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

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
          <h4>Hi</h4>
          <h3>ADMIN</h3>
          <h3>WARDEN SECTION</h3>
        </div>
      </div>
        <div className='passpanel'>
            <form onSubmit={handleSubmit}>
            <h4>Name</h4>
            <input type="name" name='name' value={formData.name} onChange={handleChange} placeholder='Enter your Name'/>
            <br />
            <h4>Roll Number</h4>
            <input type="number" name='rollNumber' value={formData.rollNumber} onChange={handleChange} placeholder='Enter your Roll Number'/>
            <br />
            <h4>Room Number</h4>
            <input type="number" name='roomNumber' value={formData.roomNumber} onChange={handleChange} placeholder='Enter your Room Number'/>
            <h4>Password</h4>
            <input type="password" name='newPassword' value={formData.newPassword} onChange={handleChange} placeholder='Confirm new password'/>
            <button className='sbp'>Submit</button>
            </form>
        </div>
       
    </div>
  )
}

export default Password