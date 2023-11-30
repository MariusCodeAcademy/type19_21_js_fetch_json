'use strict';
console.log('fetch.js file was loaded');

// Fetch API
let url = 'https://jsonplaceholder.typicode.com/posts';
// url = 'https://jsonplaceholder.typicode.com/users';
let localUrl = '/db.txt';
// fetch(url).then()
// url = 'nezinau kas cia per adresas';
fetch(localUrl)
  .then((response) => {
    console.log('response ===', response);
    // jei response ne ok tai klaida
    return response.text();
    return response.json();
  })
  .then((dataInJs) => {
    console.log(dataInJs);
  })
  .catch((err) => {
    console.warn('klaida fetch', err);
  });

// 1. i el su id text mes norim ikelti teksta gauti is db.txt
// 2. i el su id posts mes norim sugeneruoti postus is https://jsonplaceholder.typicode.com/posts
