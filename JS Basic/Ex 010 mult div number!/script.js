function multNum () {
  const num1 = document.getElementById("firstNumber").value;
  const num2 = document.getElementById("secondNumber").value;
  document.getElementById("root").innerHTML = num1 * num2;
}

function divNum () {
  const num1 = document.getElementById("firstNumber").value;
  const num2 = document.getElementById("secondNumber").value;
  document.getElementById("root").innerHTML = num1 / num2;
}