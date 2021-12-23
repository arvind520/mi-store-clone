import React from "react";
import "../styles/ProductReviews.css";
const ProductReviews = ({ productReviewsData }) => {
  return (
    <div className="ProductReviews">
      <div>
        <img src={productReviewsData[0].image} alt="" />
        <h5>{productReviewsData[0].review}</h5>
        <span>{productReviewsData[0].name}</span>
        <b>{productReviewsData[0].price}</b>
      </div>
      <div>
        <img src={productReviewsData[1].image} alt="" />
        <h5>{productReviewsData[1].review}</h5>
        <span>{productReviewsData[1].name}</span>{" "}
        <b>{productReviewsData[1].price}</b>
      </div>
    </div>
  );
};

export default ProductReviews;
