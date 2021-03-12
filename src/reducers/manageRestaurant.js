import cuid from "cuid";

export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const newRest = { text: action.text, id: cuid() };
      return { ...state, restaurants: [...state.restaurants, newRest] };
    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter((r) => r.id !== action.id),
      };
    case "ADD_REVIEW":
      const newReview = {
        text: action.text,
        restaurantId: action.restaurantId,
        id: cuid(),
      };
      return { ...state, reviews: [...state.reviews, newReview] };
    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter((r) => r.id !== action.id),
      };
    default:
      return state;
  }
}
