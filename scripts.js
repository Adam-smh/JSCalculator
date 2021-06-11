let symbols = document.querySelectorAll(".sym");
let num = document.querySelectorAll(".nums");
let comma = document.getElementsByClassName("comma");

let btn1 = document.getElementById("clear");
let btn2 = document.getElementsByClassName("equal");

let input = document.getElementById("input");

for (let i = 0; i < num.length; i++) {
  num[i].addEventListener("click", append);
}
for (let i = 0; i < symbols.length; i++) {
  symbols[i].addEventListener("click", append);
}

comma.addEventListener("click", append);
btn1.addEventListener("click", clear);
btn2.addEventListener("click", Answer);

function append(x) {
  if (input == "0" && x.target.innerHTML == "0") {
    input;
  } else if (x.target.innerHTML == ",") {
    if (input.includes(",")) {
      input;
    } else if (input == "") {
      input.innerHTML = "0" + x.target.innerHTML;
    }
  } else {
    input.innerHTML += x.target.innerHTML;
  }
}

function clear() {
  input.innerHTML = "";
}

// function add() {
//   if (input.innerHTML.includes "+") {
//   }
// }
