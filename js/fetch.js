'use strict';
console.log('fetch.js file was loaded');

// taikomes

const els = {
  h2El: document.querySelector('#text'),
  postUl: document.querySelector('#posts'),
};

// Fetch API
let url = 'https://jsonplaceholder.typicode.com/posts';
// url = 'https://jsonplaceholder.typicode.com/users';
let localUrl = '/db.txt';
// fetch(url).then()
// url = 'nezinau kas cia per adresas';
fetch(localUrl)
  .then((response) => {
    // console.log('response ===', response);
    // jei response ne ok tai klaida
    return response.text();
    return response.json();
  })
  .then((dataInJs) => {
    // gavom duomenis Javascript formatu (nebe JSON)
    // console.log(dataInJs);
    let text = dataInJs.split(';\n');
    // console.log('text ===', text);
    els.h2El.textContent = text[0];
  })
  .catch((err) => {
    console.warn('klaida fetch', err);
  });

// 1. i el su id text mes norim ikelti teksta gauti is db.txt
// els.h2El.textContent = dataInJs;
// 2. i el su id posts mes norim sugeneruoti postus is https://jsonplaceholder.typicode.com/posts

function generatePosts() {
  fetch(url)
    .then((response) => response.json())
    .then((postArr) => {
      // cia mes turim duomenis
      console.log('postArr ===', postArr);
      // atskirti ikelimo i html funkcionaluma i atksira funkcija
      addToHtml();
      postArr.forEach((postObj) => {
        // sukurti li
        const liHTML = `
        <li class="card">
          <p class="id">post id: ${postObj.id}</p>
          <h3>${postObj.title}</h3>
          <p class="text">${postObj.body}</p>
        </li>
        `;
        console.log('liHTML ===', liHTML);
        // prideti texta
        // patalpinti ul
        // els.postUl.innerHTML += liHTML;
        els.postUl.insertAdjacentHTML('beforeend', liHTML);
      });
    })
    .catch((err) => {
      console.warn('klaida generatePosts', err);
    });
}
generatePosts();

function addToHtml() {}
