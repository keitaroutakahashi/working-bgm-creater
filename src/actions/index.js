export const changeFirstArtists = (name) => {
  return {
    type: 'CHANGE_FIRST',
    name,
  }
}

export const changeSecondArtists = (name) => {
  return {
    type: 'CHANGE_SECOND',
    name,
  }
}

export const changeThirdArtists = (name) => {
  return {
    type: 'CHANGE_THIRD',
    name,
  }
}

export const createBGM = () => {
  return {
    type: 'CREATE_BGM',
  }
}