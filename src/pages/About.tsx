import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/jeff.jpg";
import { FaBookOpen, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi, I am Jeff</h1>
      <h2 className="profile-text">The creator of this pokedex</h2>
      <h4 className="profile-text">
      </h4>
      <div className="profile-links">
        <a href="https://github.com/jeffjiang13">
          <FaGithub />
        </a>
        <a href="https://jeffjiang.vercel.app/">
          <FaBookOpen />
        </a>
        <a href="https://www.linkedin.com/in/jeffjiang13">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
