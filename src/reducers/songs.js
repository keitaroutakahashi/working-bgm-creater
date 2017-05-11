const songs = (state = [], action) => {
  switch(action.type) {
    case 'RECEVE_DATA':
      return state.concat(action.songs)
    default:
      return state;
  }
}

export default songs;