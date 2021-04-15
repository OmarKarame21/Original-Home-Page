import React, { useState, useEffect } from "react";
import { database } from "./firebase";
//import Todo from "./Todo";

export default function Listings() {
  const [tutorials, setTutorials] = useState("");
  const tutorialsRef = database.ref("/Listings");
  tutorialsRef.once("value", function (snapshot) {
    var tutorials = [];

    snapshot.forEach(function (childSnapshot) {
      var key = childSnapshot.key;
      var data = childSnapshot.val();
      // ...

      tutorials.push({
        key: key,
        title: data.title,
        description: data.description
      });
    });

    //console.log(tutorials);
  });

  return (
    <div>
      <p>heololo`</p>
      <p></p>
    </div>
  );
}
