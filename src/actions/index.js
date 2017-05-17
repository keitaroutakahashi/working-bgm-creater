import fetchJsonp from 'fetch-jsonp';


export const changeArtist = (name) => {
  return {
    type: 'CHANGE_ARTIST',
    name,
  }
}

export const createBGM = () => {
  return {
    type: 'CREATE_BGM',
  }
}


export const fetchAPI = (name) => dispatch =>
  fetchJsonp(`https://itunes.apple.com/search?lang=ja_jp&entry=music&media=music&country=JP&term=${name}&attribute=artistTerm&limit=10`)
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    dispatch(receveData(json.results))
  });


export const receveData = (songs) => {
  return {
    type: 'RECEVE_DATA',
    songs,
  }
}

export const chnageSong = (num) => {
  return {
    type: 'CHANGE_SONG',
    num,
  }
}

export const chnageView = (view) => {
  return {
    type: 'CHANGE_VIEW',
    view,
  }
}