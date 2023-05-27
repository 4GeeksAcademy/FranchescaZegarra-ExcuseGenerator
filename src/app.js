/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "His turtle", "My bird", "My grandma"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the car", "her arm"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = Math.floor(Math.random() * who.length);
  let randomWhen = Math.floor(Math.random() * when.length);
  let randomAction = 0;
  let randomWhat = 0;

  if (randomWho <= 2) {
    randomAction = Math.floor(Math.random() * 2);
    randomWhat = 0;
  } else {
    randomAction = Math.floor(Math.random() * 2 + 2);
    if (randomAction == 2) {
      randomWhat = 1;
    } else {
      randomWhat = 2;
    }
  }

  document.write(
    who[randomWho] +
      " " +
      action[randomAction] +
      " " +
      what[randomWhat] +
      " " +
      when[randomWhen]
  );
};
