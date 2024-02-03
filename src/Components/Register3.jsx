import React from "react";
import "../Style/Register3.css";
import "../Style/Register1.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

function Register3({ handleChange, values }) {
  const { email, password, cpassword } = values;
  const navigate = useNavigate();
  const handleAuthenticate = () => {
    if (password === cpassword && password !== null && cpassword !== null) {
      try {
        createUserWithEmailAndPassword(auth, email, password);
      } catch (e) {
        console.log(e);
      }
    }

  };
  return (
    <div className="Main3">
      <img className="Ellipse" src="/images/Ellipse_login.png" alt="bg" />
      <div className="Main_logo">
        <img src="/images/TripTracks.png" alt="Main_logo" />
      </div>
      <div className="Main1_Num">
        <img className="Main1_num1" src="/images/1.png" alt="Main_1" />
        <img className="Main1_num2" src="/images/2.png" alt="Main_2" />
        <div className="Main3_num3">
          <img
            className="Main1_num1_bg"
            src="/images/Num_bg_Reg.png"
            alt="Main_2"
          />
          <img className="Main1_num1" src="/images/3.png" alt="Main_3" />
        </div>
      </div>
      <div className="Main3_text">
        <p className="Main3_qu1">Set Password</p>
        <input
          className="Main3_ans1"
          type="text"
          id="password"
          value={values.password}
          onChange={handleChange("password")}
          required
        />
        <p className="Main3_qu2">Confirm Password</p>
        <input
          className="Main3_ans2"
          type="text"
          id="password"
          value={values.cpassword}
          onChange={handleChange("cpassword")}
          required
        />
        <button
          type="submit"
          onClick={()=>{handleAuthenticate(); navigate("/choose")}}
          className="bg-[#FB8500] w-[212px] h-[48px] text-[24px] ml-auto mr-auto absolute left-0 right-0 rounded-[12px] mt-[72px] text-[#F6EFE6]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
export default Register3;
