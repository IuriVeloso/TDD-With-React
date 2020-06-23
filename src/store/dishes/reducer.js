const initialState = {};

const dishes = (state = initialState, action) => {
  switch (action.type) {
  case 'dishes/ADD_DISH':
    const { restaurantName, dishName } = action;
    return { ...state,
      [restaurantName]: [
        dishName,
        ...(state[restaurantName]||[]),
      ] };
  default:
    return state;
  }
};

export default dishes;
