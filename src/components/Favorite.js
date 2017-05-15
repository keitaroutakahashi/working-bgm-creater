import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FavoriteItem from './FavoriteItem';


const Favorite = ({artists, changeArtist}) => (
  <ReactCSSTransitionGroup
    className="c-favorite"
    component="ul"
    transitionName="c-favorite"
    transitionAppear={true}
    transitionAppearTimeout={5000}
    transitionEnterTimeout={1000}
    transitionLeaveTimeout={500}>
    {
      artists.map((name, index) => 
        <FavoriteItem key={index} name={name} changeArtist={changeArtist} />
      )
    }
  </ReactCSSTransitionGroup>
);


export default Favorite;