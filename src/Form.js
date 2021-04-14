import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
/*import Homepage from "./Homepage.js";*/

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img
            src="https://cdn.dribbble.com/users/1118956/screenshots/14259769/media/5fdc2f11c7f94616cca7ad158504853f.jpg?compress=1&resize=400x300"
            className="form-img"
            alt="putpichere"
          />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;

/*   {!isSubmitted ? <loginForm submitForm={submitForm} /> : <Homepage />} */

/*<span className="close-btn">×</span>*/
