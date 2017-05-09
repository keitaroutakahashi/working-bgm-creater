const defaultState = {
  first: '',
  second: '',
  third: '',
}

const artists = (state = defaultState, action) => {
  switch(action.type) {
    case 'CHANGE_FIRST':
      return Object.assign({}, state, {
        first: action.name
      });
    case 'CHANGE_SECOND':
      return Object.assign({}, state, {
        second: action.name
      });
    case 'CHANGE_THIRD':
      return Object.assign({}, state, {
        third: action.name
      });
    default:
      return state;
  }
}

export default artists;