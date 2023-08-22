import React from "react";
import { Navigate, useNavigate } from 'react-router-dom';



const Login = () => {

    const Navigate = useNavigate();

  const redirectToHome = () => {
    Navigate("/home");
  };

  return (
    <div className="login">
      <div >
        <h1 className="h1logo">U</h1>
        <h1 className="h1logo2">HOSTEL</h1>
      </div>
      <div>
        <form action="">
          <input type="text" placeholder="Username" />
          <br />
          <input type="password" placeholder="Password" />
        </form>
        <button type="" onClick={redirectToHome}>Sign In</button>
        <p>Questions? Email us at uhostel@chitkara.edu.in</p>
      </div>
    </div>
  );
};

export default Login;
