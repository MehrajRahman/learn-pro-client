import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipment from './components/Shipment/Shipment';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Home/Navbar/Navbar';
import AddANewCourse from './components/Dashboard/AddANewCourse/AddANewCourse';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import YourCourse from './components/Dashboard/YourCourse/YourCourse';
import AllStudents from './components/Dashboard/AllStudents/AllStudents';
import CreateReview from './components/Dashboard/CreateReview/CreateReview';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({
    name: "",
    email:"",
    image:"",
    role: "student",
    signedIn: false,
    courses: []
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route exact path="/yourCourse">
          <YourCourse></YourCourse>
        </Route>
        <Route exact path="/review">
          <CreateReview></CreateReview>
        </Route>
        <Route exact path="/allStudents">
          <AllStudents></AllStudents>
        </Route>
        <PrivateRoute exact path="/addNewCourse">
          <AddANewCourse></AddANewCourse>
        </PrivateRoute>
        <PrivateRoute  path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path='/shipment'>
          <Dashboard></Dashboard>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
