import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';


export default class App extends Component {
 constructor() {
  super();
 }

 componentDidMount() {
  fetchJsonp('https://itunes.apple.com/search?lang=ja_jp&entry=music&media=music&country=JP&term=flower&attribute=artistTerm&limit=100&_=1492927545219')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
 }

 render() {
   return(
     <div>
       hoge
     </div>
   ) 
 }
}