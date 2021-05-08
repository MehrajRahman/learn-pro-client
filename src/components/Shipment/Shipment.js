import React, { useContext } from "react";
import { UserContext } from "../../App";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import StripeCard from "../StripeCard/StripeCard";
import './StripeCard.css'
import Navbar from "../Home/Navbar/Navbar";

const stripePromise = loadStripe(
  "pk_test_51Ih9VBSCr3SoO8PUvWd9xIi95RVdmKeNgqwF6tfcT8V5PQJ5hTKQ5f7CqXtUp0A488OwnF1atgC5cmgT7xMQK6Hu00tj19W7Ga"
);

const Shipment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { name, email, courses } = loggedInUser;
  console.log(loggedInUser);
  const handleSubmit = (e) => {
    const formData = new FormData()
  
    formData.append('name', name);
    formData.append('email', email);
    formData.append('course', courses[0].name);
    console.log(formData);
    fetch('https://pure-fortress-93000.herokuapp.com/enrollCourse', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data){
              alert("You have purchased the course")
            }
        })
        .catch(error => {
            console.error(error)
        })
        e.preventDefault();
}
  

  return (
    
    <div>
      <Navbar></Navbar>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleName"
            value={name}
          />
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Course Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={courses[0].name}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={courses[0].price}
          />
        </div>
        
        <div className="stripeCard">
        <Elements stripe={stripePromise}>
          <StripeCard></StripeCard>
        </Elements>
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Shipment;
