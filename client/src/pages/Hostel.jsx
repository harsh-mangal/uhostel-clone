import React from "react";
import Navbar from "../Components/Navbar";
import Panel1 from "../Components/Panel1";

const Hostel = () => {
  return (
    <div>
      <Navbar />
      <Panel1 />
      <div className="hostel">
        <div className="hostelpanel">
            <h4 className="redb">KINDLY CLEAR ALL YOUR DUES BEFORE APPLYING FOR CHECKOUT</h4>
            <h4 className="redh">(REQUEST WITH PENDING DUES WILL NOT BE ENTERTAINED)</h4>
            <hr />
            <h4 className="redh">STEPS</h4>
            <p>
                <ol>
                    <li>Apply for checkout</li>
                    <li>Approval from hostel warden</li>
                    <li>Fine payment (if any)</li>
                    <li>Approval from accounts department (submit your hostel ID)</li>
                    <li>Apply online for refund (if applicable) (attach scanned copy of cheque/passbook)</li>
                    <li>Account details should be of Student or of Parent</li>
                </ol>
                <input type="checkbox" name="" id="" /><span>Agree & Continue</span>
               
            </p>
            <button className='sbph'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Hostel;
