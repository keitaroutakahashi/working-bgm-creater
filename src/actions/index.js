import $ from 'jquery';
import fetchJsonp from 'fetch-jsonp';


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


export const fetchAPI = () => dispatch =>
  fetchJsonp('https://itunes.apple.com/search?lang=ja_jp&entry=music&media=music&country=JP&term=flower&attribute=artistTerm&limit=10')
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