import { FloatingActionButton } from "materialize-css";

const initialState = [];

const restaurants = (state = initialState, { type, name, restaurants }) => {
  switch (type) {
  case 'restaurants/ADD_RESTAURANTS':
    return [...state, name];
  case 'restaurants/STORE_RESTAURANTS':
    return restaurants;
  default:
    return state;
  }
};

export default restaurants;
