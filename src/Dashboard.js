import React, { useState } from "react";
import ReactToolTip from "react-tooltip";
import { useAuth } from "./contexts/authcontext";
import { useHistory } from "react-router-dom";
import { database } from "./firebase";
import GoogleMaps from "./components/NewGoogleMapsThree";

import "./dash.css";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chatbot from "react-chatbot-kit";
import config from "./chatbot/config.js";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="app">
        {/* <main> */}
        <div className="container">
          <span id="box-holder">
            <input
              className="search-bar"
              type="search"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
          </span>
        </div>
        <body></body>
        <div className="row">
          <div className="column">
            <img
              className="pic"
              src="https://static.wixstatic.com/media/74f558_10aab65e4bad4b5b9a168ee1695f4e03~mv2.jpg/v1/fill/w_1744,h_1192,al_c,q_90,usm_0.66_1.00_0.01/aaron-huber-oMOx_wV6mLQ-unsplash.jpg"
              alt="pic"
            />
          </div>
          <br></br>
          <br></br>
        </div>
        <div className="google-map-container">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="map-header">MAP VIEW</h1>
          <div className="map-header-2">
            <em>here is the view of the flats near you</em>
            <Dashboard />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        {/* </main> */}
        <footer>
          <p className="footer-container">
            <em>Contact Us</em>
          </p>
          <div
            style={{
              maxWidth: "300px",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "#2f2e2e",
              marginTop: "-5%"
            }}
          >
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          </div>
        </footer>
      </div>
    </>
  );
}

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    try {
      await logout();
      history.push("/");
    } catch {
      console.log("Logout Error");
    }
  }

  /*const [searchString, setSearchString] = useState("");

  const searchSubmit = (e) => {
    e.preventDefault();

    console.log("search");
  };*/

  /*const handleSearchChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSearchString({
      [name]: value
    });
  };*/

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      makeListing();
      setListing({
        title: "",
        description: "",
        price: "",
        location: "",
        landlordID: "",
        status: "",
        isBooked: ""
      });
    } catch {
      console.log("property listing creation error");
    }
  };

  function makeListing() {
    setListing({ isBooked: "false" });
    const listingRef = database.ref("Listings");
    listingRef.push(listing);
  }

  const [listing, setListing] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    landlordID: "",
    status: "",
    isBooked: ""
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setListing({
      ...listing,
      [name]: value
    });
  };

  const { getCurrentUID } = useAuth();
  const { getCurrentEmail } = useAuth();
  const [accountType, setAccountType] = useState("Employee");

  if (accountType === "Employee") {
    return (
      <div>
        <p> Dashboard </p>
        <p> Your email address: </p> {getCurrentEmail()}
        <p> Current UID: </p> {getCurrentUID()}
        <button onClick={handleLogOut}> Log Out </button>
        <GoogleMaps />
      </div>
    );
  } else {
    return (
      <div>
        <p> Dashboard </p>
        <p> Your email address: </p> {getCurrentEmail()}
        <p> Current UID: </p> {getCurrentUID()}
        <button onClick={handleLogOut}> Log Out </button>
        <form onSubmit={handleFormSubmit}>
          <label>Listing Name</label>
          <input
            id=""
            type=""
            name="title"
            className=""
            placeholder="Enter your listing title"
            value={listing.title}
            onChange={handleChange}
          />
          <div>
            <label>Description</label>
            <textarea
              name="description"
              cols="40"
              rows="3"
              maxLength="150"
              data-tip
              data-for="descriptionToolTip"
              value={listing.description}
              onChange={handleChange}
            ></textarea>
            <ReactToolTip id="descriptionToolTip" place="bottom" effect="solid">
              There is a max character limit of 150 characters
            </ReactToolTip>
            <button type="submit"> Enter </button>
          </div>
          <label>Price</label>
          <input
            id=""
            type=""
            name="price"
            className=""
            placeholder=""
            value={listing.price}
            onChange={handleChange}
          />
          <div>
            <label>Location</label>
            <input
              id=""
              type=""
              name="location"
              className=""
              placeholder="Enter the location"
              value={listing.location}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default App;

/*const itemsRef = firebase.database().ref("users");
    const user = {
      username: values.email2,
      password: values.password2,
      employeeID: values.EmployeeID
    };
    itemsRef.push(user);
    */
