import { FaGithubSquare } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "./footer.css";

export default function footer() {
  return (
    <div className="mainf">
      {/* <a href="https://github.com/lakpro"> */}
      <button className="icon">
        <a href="https://github.com/lakpro">
          <FaGithubSquare />
        </a>
      </button>
      {/* </a> */}

      <div className="icon">
        <a href="https://lakpro.github.io/port-mob/">
          <FaGlobeAsia />
        </a>
      </div>
      <div className="icon">
        <a href="https://www.instagram.com/lakshay.setia/">
          <FaInstagramSquare />
        </a>
      </div>
    </div>
  );
}

// document.getElementById("icon").onclick("https://github.com/lakpro");
