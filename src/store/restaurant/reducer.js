import { FloatingActionButton } from "materialize-css";

const initialState = [];

const restaurants = (state = initialState, { type, restaurants, restaurant }) => {
  switch (type) {
  case 'restaurants/ADD_RESTAURANTS':
    return [restaurant, ...state];
  case 'restaurants/STORE_RESTAURANTS':
    return restaurants;
  default:
    return state;
  }
};

export default restaurants;
