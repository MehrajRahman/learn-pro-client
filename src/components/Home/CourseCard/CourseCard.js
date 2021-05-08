import React, { useContext } from "react";
import { UserContext } from "../../../App";
import "./CourseCard.css";

const CourseCard = (props) => {
  const { name, price, desc, image } = props.course;
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const handleClick = props.handleClick;
  return (
    <div className="col-md-4 p-4 ">
      <div lassName=" course-card">
        <img
          className="courseImage"
          style={{
            height: "200px",
            width: "300px",
            display: "block",
            margin: "auto",
          }}
          src={`data:image/png;base64,${image.img}`}
          alt=""
        />
      </div>
      <div className="course-text">
        <h1 className="text-center"> {name}</h1>
        <p>{desc}</p>
        <p className="text-center">{price}</p>
        <button onClick={()=>handleClick(props.course)} className="btn button btn-success">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;
