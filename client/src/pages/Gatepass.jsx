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
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Gatepass