import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-brand'>
            <img src="https://uhostel.chitkara.edu.in/student/images/logo.png" alt="" />
        </div>
        <div className='nav-links'>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/gatepass">Gatepass</a></li>
                <li><a href="/nda">Non-Disciplinary Action</a></li>
                <li><a href="/hostelcheckout">Hostel Checkout</a></li>
                <li><a href="/changepassword">Change Password</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar