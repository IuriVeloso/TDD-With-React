import { combineReducers } from 'redux';
import restaurants from './restaurant/reducer';
import dishes from './dishes/reducer';

export default combineReducers({
  restaurants,
  dishes,
});
