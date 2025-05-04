import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let random4 = Math.floor(Math.random*4);
  let random3 = Math.floor(Math.random*3);
  let random5 = Math.floor(Math.random*5);
  console.log(who[random4]+action[random4]+what[random3]+when[random5]);
  document.getElementById("excuse").innerHTML=who[random4]+action[random4]+what[random3],when[random5];

};
