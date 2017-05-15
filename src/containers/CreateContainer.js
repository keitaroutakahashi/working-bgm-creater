import { connect } from 'react-redux';
import { changeArtist, chnageView, fetchAPI } from '../actions';
import Create from '../components/Create';



const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    currentView: state.currentView,
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch(changeArtist(name))
    },
    changeView: (view) => {
      dispatch(chnageView(view))
    },
    fetchAPI: (name) => {
      dispatch(fetchAPI(name))
    }
  }
}


const CreateContainer = connect(
  mapStateToProps,
  mapStateToDispatch
)(Create);


export default CreateContainer;