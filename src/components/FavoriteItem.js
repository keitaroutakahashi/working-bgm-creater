import React from 'react';


const FavoriteItem = ({name, changeArtist}) => (
    <li onClick={(e) => {changeArtist(e.target.innerHTML)}}>{name}</li>
);


export default FavoriteItem;