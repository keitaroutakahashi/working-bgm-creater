const currentNumber = (state = 0, action) => {
  switch(action.type) {
    case 'CHANGE_SONG':
      return state + 1;
    default:
      return state;
  }
}

export default currentNumber;