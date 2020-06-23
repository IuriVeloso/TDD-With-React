const initialState = [];

const restaurants = (state = initialState, { type, name }) => {
  switch (type) {
  case 'restaurants/ADD_RESTAURANTS':
    return [...state, name];
  default:
    return state;
  }
};

export default restaurants;
