const artist = (state = '', action) => {
  switch(action.type) {
    case 'CHANGE_ARTIST':
      return action.name;
    default:
      return state;
  }
}

export default artist;