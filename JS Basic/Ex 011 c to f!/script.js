function CtoF() {
  const Centigrade = document.getElementById("temp").value;
  const Farenheit = Centigrade * 9 / 5 + 32;
  document.getElementById("root").innerHTML = `${Centigrade} degrees Centigrade is
  ${Farenheit} degrees Farenheit.`
}

function FtoC() {
  const Farenheit = document.getElementById("temp").value;
  const Centigrade = (Farenheit - 32) * 5 / 9;
  document.getElementById("root").innerHTML = `${Farenheit} degrees Farenheit is
  ${Centigrade} degrees Centigrade.`
}