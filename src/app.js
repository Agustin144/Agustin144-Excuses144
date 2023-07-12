/* eslint-disable */
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [ "before the class", "tight on time","when I finished","during my lunch", "while I was praying"];

window.onload = function() {
  //write your code here
  

  const aleatorio_persona =  who[Math.floor(Math.random() * who.length)]
  const aleatorio_action =  action[Math.floor(Math.random() * action.length)]
  const aleatorio_what =  what[Math.floor(Math.random() * what.length)]
  const aleatorio_when=  when[Math.floor(Math.random() * when.length)]
  const frse= aleatorio_persona+" "+aleatorio_action+" "+ aleatorio_what+" "+ aleatorio_when
  console.log(aleatorio_persona, aleatorio_action, aleatorio_what, aleatorio_when);
document.getElementById("frase").innerHTML=`${frse}`
  };
