let input = document.getElementById("input");

function equal(x) {
  let inner = x.innerHTML;

  if (inner == "=") {
    input.innerHTML = eval(input.innerHTML);
  } else {
    if (input.innerHTML == "0") {
      input.innerHTML = inner;
    } else {
      input.innerHTML += inner;
    }
  }
}
function clear(x) {
  let inner = x.innerHTML;

  if (inner == "C") {
    input.innerHTML = "0";
  }
}

function entries(x) {
  let inner = x.innerHTML;

  if (input.innerHTML == "0") {
    input.innerHTML = inner;
  } else {
    input.innerHTML += inner;
  }
}
