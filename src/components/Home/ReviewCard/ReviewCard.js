import React from "react";
import './ReviewCard.css'

const ReviewCard = (props) => {
  const { name, desc, designation, image,ind } = props.user;
  const id = "id" + ind;
  return (
    
      <div id="reviews" className="col-md-4 review  ">
      <div className={id}>
      <div className="d-flex  justify-content-center">
        <img style={{ height: "60px",width:'60px', borderRadius:'30px' }} src={`data:image/png;base64,${image.img}`} alt="" />
        <div className="biodata">
        <p className="name">{name}</p>
        <p className="job">{designation}</p>
        </div>
      </div>

      <p className="review-text">{desc}</p>
      </div>
    </div>
    
  );
};

export default ReviewCard;
