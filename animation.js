"use strict";

let adjectives = [
  "Violinist",
  "Writer",
  "Leader",
  "Pianist",
  "Crypto-Enthusiast",
  "Student",
  "Polymath",
  "Gamer",
  "Developer",
];

let i = 0;
setInterval(function () {
  document.getElementsByClassName("changing-adjective")[0].innerHTML =
    adjectives[i];
  i = (i + 1) % adjectives.length;
}, 1000);
