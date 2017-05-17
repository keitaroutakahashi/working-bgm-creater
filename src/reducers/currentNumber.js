const currentNumber = (state = 0, action) => {
  switch(action.type) {
    case 'CHANGE_SONG':
      return action.num;
    default:
      return state;
  }
}

export default currentNumber;