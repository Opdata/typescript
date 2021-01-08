const url = "https://jsonplaceholder.typicode.com/users";

const username = document.querySelector(".username");
const useremail = document.querySelector(".useremail");
const useraddress = document.querySelector(".useraddress");

let user = {};

//JS Doc

/**
 * @typedef {Object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {Object} User
 * @property {String} name
 * @property {String} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 *
 */

function fetchUrl() {
  return axios.get(url);
}

function start() {
  fetchUrl().then((res) => {
    user = res.data;
    username.innerText = user[0].name;
    useremail.innerText = user[0].email;
    useraddress.innerText = user[0].address.street;
  });
}

start();
