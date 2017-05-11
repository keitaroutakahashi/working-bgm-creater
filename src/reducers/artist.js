const artist = (state = '', action) => {
  switch(action.type) {
    case 'CHANGE_ARTIST':
      return action.artist;
    default:
      return state;
  }
}

export default artist;