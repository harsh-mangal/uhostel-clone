import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-brand">
          <Link to="/admin">
            {" "}
            <img
              src="https://uhostel.chitkara.edu.in/student/images/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/register">New Student</Link>
            </li>
            <li>
              <Link to="/admin">Approve Gatepass</Link>
            </li>
            <li>
              <Link to="/admin">Student List</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="panel1">
        <div>
          <img
            src="https://uhostel.chitkara.edu.in/student/images/user5.png"
            alt=""
          />
        </div>
        <div>
          <h4>Hi,HARSH MANGAL</h4>
          <h3>ADMIN</h3>
          <h3>WARDEN SECTION</h3>
        </div>
      </div>
      <div className="panel2">
        <div className="cell">
          <h4>
            <Link to="/register">Register New Student</Link>
          </h4>
          <p>Here you can register new student</p>
        </div>
        <div className="cell">
          <h4>
            <Link to="/admin">Gatepass</Link>
          </h4>
          <p>Approve Gatepass</p>
        </div>
        <div className="cell">
          <h4>
            <Link to="/admin">Student Details</Link>
          </h4>
          <p>complete list of students</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
