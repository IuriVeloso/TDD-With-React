const initialState = [];

const dishes = (state = initialState, { type, name }) => {
  switch (type) {
  case 'dishes/ADD_DISH':
    return [...state, name];
  default:
    return state;
  }
};

export default dishes;
