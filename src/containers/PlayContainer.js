import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import Play from '../components/Play';



const mapStateToProps = (state) => {
  return {
    songs: state.songs
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    onChangeKeywords: (key) => {
      dispatch(fetchAPI(key))
    }
  }
}


const PlayContainer = connect(
  mapStateToProps,
  mapStateToDispatch
)(Play);


export default PlayContainer;