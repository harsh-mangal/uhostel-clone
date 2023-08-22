import React from 'react'
import Navbar from '../Components/Navbar'
import Panel1 from '../Components/Panel1'

const Password = () => {
  return (
    <div>
        <Navbar />
        <Panel1 />
        <div className='passpanel'>
            <h4>Current Password</h4>
            <input type="password" placeholder='Enter your current password'/>
            <br />
            <h4>New Password</h4>
            <input type="password" placeholder='Enter your new password'/>
            <br />
            <h4>Confirm New Password</h4>
            <input type="password" placeholder='Confirm new password'/>
            <button className='sbp'>Submit</button>
        </div>
       
    </div>
  )
}

export default Password