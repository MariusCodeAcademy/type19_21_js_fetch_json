'use strict';
console.log('fetch.js file was loaded');

// taikomes

const els = {
  h2El: document.querySelector('#text'),
  postUl: document.querySelector('#posts'),
  usersUl: document.querySelector('#users'),
  loadPostsBtn: document.querySelector('#loadPosts'),
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
    // response nera duomenu
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
      let pirmi10Postu = postArr.slice(0, 10);
      // let pirmi10Postu = postArr.slice(10, 20);
      // let pirmi10Postu = postArr.slice(30, 40);
      console.log('pirmi10Postu ===', pirmi10Postu);
      // atskirti ikelimo i html funkcionaluma i atksira funkcija
      addToHtml(pirmi10Postu);
    })
    .catch((err) => {
      console.warn('klaida generatePosts', err);
    });
}

els.loadPostsBtn.addEventListener('click', generatePosts);
// generatePosts();

function addToHtml(arr) {
  arr.forEach((postObj) => {
    // sukurti li
    const liHTML = `
    <li class="card small">
      <p class='doc section'>post id: ${postObj.id}</p>
      <h3 class=''>${postObj.title}</h3>
      <p class="">${postObj.body}</p>
    </li>
    `;
    // console.log('liHTML ===', liHTML);

    // els.postUl.innerHTML += liHTML;
    els.postUl.insertAdjacentHTML('beforeend', liHTML);
  });
}

// su atskkra funkcija
// parsiusti user arr is  https://jsonplaceholder.typicode.com/users
// sugeneruoti li su vardu ir email kaip li elementus
// patalpinti  <ul id="users"></ul>
const baseUrl = 'https://jsonplaceholder.typicode.com';
const usersUrl = `${baseUrl}/users`;

function getUsers() {
  const fetchResult = fetch(usersUrl);
  fetchResult
    .then((resp) => resp.json())
    .then((usersArr) => {
      console.log('usersArr ===', usersArr);
      generateUsers(usersArr);
    })
    .catch((error) => {
      console.warn('ivyko klaida:', error);
    });
}
getUsers();

function generateUsers(arr) {
  arr.forEach((usrObj) => {
    const liEl = document.createElement('li');
    liEl.textContent = `${usrObj.name} email: ${usrObj.email}`;
    els.usersUl.append(liEl);
  });
}
