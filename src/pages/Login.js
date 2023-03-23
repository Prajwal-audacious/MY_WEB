
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // intitialization
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  let obj = {...loginData}

  // functions
  const getvalue = (e) => {
    const { name, value } = e.target;
    setLoginData({...loginData,[name]:value})
  };

  const onLogin = (e)=>{
    e.preventDefault()
    let data = JSON.parse(localStorage.getItem('userdata'))
    if(data?.email===obj.username && data.password===obj.password){
      alert('you are logged in succcessfully')
      navigate('/todo')
    }else{
      alert('User not found : Please sign up')
      navigate('/signup')
    }
    
  }


  return (
    <>
      <div className="wrap">
        <div className="wrap_">
          <div className="warp_c1"><h1>LOGIN</h1></div>
          <div className="warp_c2">
            <form onSubmit={onLogin} className="form_">
              <span className="form_box">
                <label htmlFor=""></label>
                <input
                  type="text"
                  placeholder="email"
                  className="form_box_in"
                  onChange={getvalue}
                  required
                  name="username"
                />
              </span>
              <span className="form_box">
                <label htmlFor=""></label>
                <input
                  type="text"
                  placeholder="password"
                  className="form_box_in"
                  onChange={getvalue}
                  name="password"
                  required
                />
              </span>

              <span className="form_box">
                <button type="submit" className="form_btn">Login</button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
