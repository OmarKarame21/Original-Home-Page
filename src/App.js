import "./App.css";
import React from "react";
import Form from "./Form";
import Login from "./LoginForm";
import Dashboard from "./Dashboard";
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/authcontext";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/Register" exact component={Form} />
            <Route path="/Login" exact component={Login} />
            <PrivateRoute path="/Dashboard" exact component={Dashboard} />
            <Route path="/About" exact component={About} />
            <Route path="/Contact" exact component={Contact} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}
