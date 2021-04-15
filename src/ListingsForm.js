import React, { useState } from "react";
import { database } from "./firebase";

export default function Form() {
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const createListing = () => {
    const dbRef = database.ref("/Listings");
    const pushItems = {
      description: "",
      isBooked: "",
      landlordID: "",
      location: "test"
    };
    dbRef.push(pushItems);
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={title} />
      <button onClick={createListing}>Add</button>
    </div>
  );
}
