import React from "react";
import "./About.css";

export default function about() {
  return (
    <div className="container">
      <img
        className="background11"
        src="https://cdn.dribbble.com/users/1118956/screenshots/14259769/media/5fdc2f11c7f94616cca7ad158504853f.jpg?compress=1&resize=1000x750"
        alt="logo"
      />
      <div class="centered">About us!</div>
      <div class="info">
        The Flat Finder web application ensures that FDM’s employees are able to
        find their perfect accommodation. This platform can be used by the FDM’s
        employees to find suitable property.
      </div>
    </div>
  );
}
