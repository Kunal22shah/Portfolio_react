import "./footer.scss";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
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
    </div>
  );
}
