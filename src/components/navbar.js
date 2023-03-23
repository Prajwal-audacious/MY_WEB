import React from "react";
import { Link } from "react-router-dom";
import '../components/style.css'



const navbar = () => {
  return (
    <div >
     
<nav class="navbar bg-primary" data-bs-theme="dark">
<div class="container-fluid ">
    <Link class="navbar-brand" to="/">
      Audacious
    </Link>

    
      <ul class="list">
        <li class="nav-item">
          <Link class="nav-link" to="signup">
            Sign up
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="login">
            Login
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="todo">
            Todo
          </Link>
        </li>
      </ul>
    
  </div> 
</nav>
    </div>
  );
};

export default navbar;



