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
            
        </div>
        <div>
              <div>
                <h4>Apply Date</h4><span> </span><span>23-Aug-2023</span>
              </div>
            </div>
    </div>
  )
}

export default Gatepass