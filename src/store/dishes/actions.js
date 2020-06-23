export const ADD_DISH = 'dishes/ADD_DISH';

export const addDish = ({ restaurantName, dishName }) => {
  return {
    type: ADD_DISH,
    restaurantName,
    dishName,
  };
};
