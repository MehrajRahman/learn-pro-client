import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../../App";
import user from "../../../images/users/user.jpg";
import user1 from "../../../images/users/user1.jpg";
import user2 from "../../../images/users/user2.jpg";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Review.css";
const data = [
  {
    name: "Danial ",
    id: 1,
    classes: "id1",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, enim!Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    job: "CEO, Manpal",
    image: user,
  },
  {
    name: "David",
    id: 2,
    classes: "id2",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, enim!",
    job: "CEO, Manpal",
    image: user1,
  },
  {
    name: "Jason Ray",
    id: 3,
    classes: "id3",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
    job: "CEO, Manpal",
    image: user2,
  },
];
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleClick = (course) => {
    const newUser = { ...loggedInUser };
    newUser.courses[0] = course;
    newUser.date = new Date();
    setLoggedInUser(newUser);
    console.log(loggedInUser);
    history.push("/shipment");
  };
  useEffect(() => {
    fetch("https://pure-fortress-93000.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((result) => setReviews(result));
  }, []);
  return (
    <div className=" review-part pt-5 pb-5">
      <h1 className="text-center">Testimonals</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="row d-flex justify-content-center align-items-center mt-5 mb-5">
          {reviews.map(
            (user, index) => (
              (user.ind = index),
              (<ReviewCard key={user.id} user={user}></ReviewCard>)
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
