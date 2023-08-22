import React from 'react'
import Navbar from '../Components/Navbar'
import Panel1 from '../Components/Panel1'

const Nda = () => {
  return (
    <div>
        <Navbar />
        <Panel1 />
        <div className='panelnda'>
            <div>
                
            </div>
            <table>
                <tr>
                    <th>Fine Dues</th>
                </tr>
                
                <hr />
                <tr className='tr2'>
                    <th>#</th>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th>Date</th>
                    <th>Fine</th>
                    <th>Reason</th>
                    <th>Amount</th>
                </tr>
                <td colspan = "5" >No Data Found</td>
            </table>
            <table className='tb2'>
                <tr>
                    <th>Fine Paid</th>
                </tr>
                <hr />
                <tr className='tr2'>
                    <th>#</th>
                    <th>Date</th>
                    <th>Receipt No.</th>
                    <th>Paid Amount</th>
                    <th>Action</th>
                </tr>
                <td colspan = "5" >No Data Found</td>
            </table>
            <button className='sbpn'>PAY NOW</button>
        <p className='sbpnp'>If it is confirmed by payment gateway that your payment is successful then kindly wait for receipt for 24 hours or 48 hrs in case of holidays.<br/>
For unsuccessful transaction kindly contact your bank or credit card company.</p>
        </div>
       
       
    </div>
  )
}

export default Nda