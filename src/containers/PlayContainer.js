import { connect } from 'react-redux';
import { fetchAPI, chnageSong } from '../actions';
import Play from '../components/Play';



const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    currentNumber: state.currentNumber,
    currentView: state.currentView,
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    onChangeSong: (num) => {
      dispatch(chnageSong(num))
    }
  }
}


const PlayContainer = connect(
  mapStateToProps,
  mapStateToDispatch
)(Play);


export default PlayContainer;