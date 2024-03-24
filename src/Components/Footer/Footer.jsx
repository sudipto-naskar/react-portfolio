import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%", height:"23rem" }} />
      <div className="f-content">
      <div className="f-icons">
          <a href="https://github.com/sudipto-naskar">
            <Insta color="white" size={"2.5rem"} />
          </a>
          <a href="https://github.com/sudipto-naskar">
            <Facebook color="white" size={"2.5rem"} />
          </a>
          <a href="https://github.com/sudipto-naskar">
            <Gitub color="white" size={"2.5rem"} />
          </a>
        </div>
        <span> &copy; {new Date().getFullYear()}; All Rights Reserved | Developed by <br /><p>SUDIPTO NASKAR</p></span>
      </div>
    </div>
  );
};

export default Footer;
