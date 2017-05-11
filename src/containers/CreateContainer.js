import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import Create from '../components/Create';



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


const CreateContainer = connect(
  mapStateToProps,
  mapStateToDispatch
)(Create);


export default CreateContainer;