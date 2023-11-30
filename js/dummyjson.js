'use strict';
console.log('dummyjson.js file was loaded');

const url = 'https://dummyjson.com/posts';

function getPosts() {
  fetch(url)
    .then((resp) => resp.json())
    .then((respObj) => {
      console.log('respObj ===', respObj);
      respObj.posts.map(() => {});
    })
    .catch((error) => {
      console.warn('ivyko klaida:', error);
    });
}
getPosts();
