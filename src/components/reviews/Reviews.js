import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const reviewList = this.props.reviews.filter(
      (review) => review.restaurantId === this.props.restaurantId
    );

    return (
      <ul>
        {reviewList.map((review) => (
          <Review
            review={review}
            key={review.id}
            deleteReview={this.props.deleteReview}
          />
        ))}
      </ul>
    );
  }
}

export default Reviews;
