/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let domainsList = document.querySelector(".domains");
  let aux = "";

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".io", ".es"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          let name = pronoun[i] + adj[j] + noun[k] + domain[l];
          aux += `<li class='list-group-item list-group-item-dark text-primary'>${name}</li>`;
        }
      }
    }
  }

  domainsList.innerHTML = aux;
};
