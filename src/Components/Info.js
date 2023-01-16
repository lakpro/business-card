import "./Info.css";
import pic from "../images/pp.jpg";
import { FaLinkedin } from "react-icons/fa";

export default function Info() {
  return (
    <>
      <img src={pic} className="pp" alt="Profile Pic" />
      <h1>Lakshay Setia</h1>
      <small>Web Developer</small>
      <div className="btn">
        <button
          onClick={() => (window.location = "mailto:lakshaysetia123@gmail.com")}
          className="eml"
        >
          📧 Email
        </button>
        <a href="https://www.linkedin.com/in/lakshay-setia/">
          <button className="lkd">
            <FaLinkedin />
            {/* <a href="https://www.linkedin.com/in/lakshay-setia/"> */}
            &nbsp;Linkedin
          </button>
        </a>
      </div>
    </>
  );
}
