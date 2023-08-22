import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-brand'>
            <img src="https://uhostel.chitkara.edu.in/student/images/logo.png" alt="" />
        </div>
        <div className='nav-links'>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/gatepass">Gatepass</Link></li>
                <li><Link to="/nda">Non-Disciplinary Action</Link></li>
                <li><Link to="/hostelcheckout">Hostel Checkout</Link></li>
                <li><Link to="/changepassword">Change Password</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar