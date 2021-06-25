let input = document.getElementById("input");

function button(x) {
  let inner = x.innerHTML;

  if (inner == "=") {
    input.innerHTML = eval(input.innerHTML);
  } else if (inner == "C") {
    input.innerHTML = "0";
  } else {
    if (input.innerHTML == "0") {
      input.innerHTML = inner;
    } else {
      input.innerHTML += inner;
    }
  }
}
