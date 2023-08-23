import React from 'react'
import Navbar from '../Components/Navbar'
import Panel1 from '../Components/Panel1'

const Gatepass = () => {
  return (
    <div>
        <Navbar/>
        <Panel1 />
        <div className='panelgp'>
            <h4>Gatepass History</h4>
            <button className='sbphg'>Apply Gatepass</button>
            <div className='applygp'>
                <h4>Apply Date</h4><span><p>23-Aug-2023</p></span>
              </div>
        </div>
        <div>
             
            </div>
    </div>
  )
}

export default Gatepass