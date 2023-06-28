import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "../styles/Loginaction.css"
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs";
import { AiFillEyeInvisible } from "react-icons/ai";

export default function LoginAction() {
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const ValName = useSelector(function (state) {
    return state.login.name;
  });

  const ValPassword = useSelector(function (state) {
    return state.login.password;
  });
  const navigate = useNavigate();
  const HandleClick = (e) => {
    e.preventDefault();
    if (ValName.length === 0 && ValPassword.length === 0 ) {
      setError(true);
    }
    else if(!ValName || !ValPassword){
      setError(true)
    }
    else if(ValName && ValPassword) {
      localStorage.setItem("admin", JSON.stringify([ValName, ValPassword,'admin/admin']));
      navigate("/home");
    }
  };

  const HandleClickeye = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="container-input">
        <div className="banner-form">
          <h3>Sign Up</h3>
          <form action="#" className="parent-form">
            <div className="parent-login-user-icon">
              <FaUserCircle className="login-user-icon" />
            </div>
            <input
              type="text"
              value={ValName}
              placeholder="Name"
              onChange={(e) => {
                dispatch({
                  type: "change-input-value",
                  payload: e.target.value,
                });
              }}
            />
            <div className="parent-label">
              {error && ValName.length <= 0 ? <label>name lracnel</label> : ""}
            </div>
            <div className="parent-login-user-icon" onClick={HandleClickeye}>
              <RiLockPasswordLine className="login-psw-icon" />
              {show ? (
                <BsFillEyeFill className="icon-eye" />
              ) : (
                <AiFillEyeInvisible  className="icon-eye" />
              )}
            </div>
            <input
              type={show ? "text" : "password"}
              value={ValPassword}
              placeholder="Password"
              onChange={(e) => {
                dispatch({ type: "change-inp-val-2", payload: e.target.value });
              }}
            />
            <div className="parent-label">
              {error && ValPassword.length <= 0 ? (
                <label>password lracnel</label>
              ) : (
                ""
              )}
            </div>
            <button className="btn-login" onClick={HandleClick}>Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
