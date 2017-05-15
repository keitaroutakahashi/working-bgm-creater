import { combineReducers } from 'redux';
import artist from './artist';
import songs from './songs';
import currentNumber from './currentNumber';
import currentView from './currentView';


export default combineReducers({
  artist,
  songs,
  currentNumber,
  currentView,
});


