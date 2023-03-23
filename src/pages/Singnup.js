import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Singnup = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const getValue = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const afterSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    localStorage.setItem("userdata", JSON.stringify(input));
    alert('You are successfully signup signup')
    navigate("/login");
  };

  return (
    <div className="wrap">
      <div className="wrap_">
        <div className="warp_c1"><h1>SIGN UP</h1></div>
        <div className="warp_c2">
          <form onSubmit={afterSubmit} className="form_">
            <span className="form_box">
              <label htmlFor=""></label>
              <input
                type="text"
                placeholder="firstname"
                className="form_box_in"
                onChange={getValue}
                name="firstname"
                required
              />
            </span>
            <span className="form_box">
              <label htmlFor=""></label>
              <input
                type="text"
                placeholder="lastname"
                className="form_box_in"
                onChange={getValue}
                name="lastname"
                required
              />
            </span>
            <span className="form_box">
              <label htmlFor=""></label>
              <input
                type="text"
                placeholder="email"
                className="form_box_in"
                onChange={getValue}
                name="email"
                required
              />
            </span>
            <span className="form_box">
              <label htmlFor=""></label>
              <input
                type="password"
                placeholder="password"
                className="form_box_in"
                onChange={getValue}
                name="password"
                required
              />
            </span>
            <span className="form_box">
              <button type="submit" className="form_btn">
                Sign up
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singnup;
