import "./navbar.scss";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export default function navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      {/*if menu open- true */}
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Home
          </a>
          {/* <div className="itemContainer">
            <Person className="icon" />
          
          </div> */}
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/k22shah/">
              <AiFillLinkedin className="icon" />{" "}
            </a>
            <a href="https://github.com/Kunal22shah">
              <AiFillGithub className="icon" />
            </a>

            <a href="https://www.instagram.com/kunal22shah/">
              <AiFillInstagram className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            {/* <a href="mailto:kunalshah606@gmail.com">
              <Mail className="icon" /> */}
            {/* </a> */}
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {/* // on click do opp of menuOpen func */}
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
