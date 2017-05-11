import { combineReducers } from 'redux';
import artist from './artist';
import songs from './songs';


export default combineReducers({
  artist,
  songs,
});