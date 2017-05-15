import { connect } from 'react-redux';
import { changeArtist } from '../actions';
import Favorite from '../components/Favorite';
import { artists } from '../json/artists.json';


const mapStateToProps = (state) => {
  return {
    artists: artists,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeArtist: (name) => {
      dispatch(changeArtist(name))
    }
  }
}


const FavoriteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorite)

export default FavoriteContainer;