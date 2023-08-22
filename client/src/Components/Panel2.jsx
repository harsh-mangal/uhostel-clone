import React from 'react'

const Panel2 = () => {
  return (
    <div className='panel2'>
        <div className='cell'>
            <h4><a href="">Gate Pass</a></h4>
            <p>Gate Pass for Students Leave, In & Out Campus Request</p>
        </div>
        <div className='cell'>
        <h4><a href="">Payment Receipt</a></h4>
            <p>Payment Transaction Receipt</p>
        </div>
        <div className='cell'>
        <h4><a href="">Non-Disciplinary Action</a></h4>
            <p>Extra Dues for Non-Disciplinary Action</p>
        </div>
        <div className='cell'>
        <h4><a href="">New Semester Allotment(Room Booking)</a></h4>
            <p>Only limited number of rooms are available which will be allotted on first come first serve basis based upon the date and time of registration. The room will be allotted after physical verification of documents.</p>
        </div>
        {/* <div className='cell'>
        <h4><a href="">Hostel Checkout</a></h4>
            <p>Hostel Checkout</p>
        </div> */}
    </div>
  )
}

export default Panel2