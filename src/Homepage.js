import React from "react";
import "./homepagestyles.css";
import logo from "./logo_size.jpg";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();

  const AboutButton = () => {
    history.push("/About");
  };

  const ContactButton = () => {
    history.push("/Contact");
  };

  const LoginButton = () => {
    history.push("/Login");
  };

  const RegisterButton = () => {
    history.push("/Register");
  };
  return (
    <div className="wrapper">
      <img
        className="background11"
        src="https://cdn.dribbble.com/users/1118956/screenshots/14259769/media/5fdc2f11c7f94616cca7ad158504853f.jpg?compress=1&resize=1000x750"
        alt="logo"
      />
      <nav className="navbar">
        <h1>THE FLAT FINDER </h1>
        <ul>
          <li>
            <a className="active" href="">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => AboutButton()} href="">
              About Us
            </a>
          </li>
          <li>
            <a onClick={() => ContactButton()} href="">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="center">
        <div className="buttons">
          <button onClick={() => LoginButton()}>Login</button>
          <button onClick={() => RegisterButton()} className="btn2">
            Register
          </button>
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
