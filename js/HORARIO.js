function Horario() {
  var hora = new Date().getHours();
  var Image = document.querySelector("img");
  var fundo = document.getElementById("fundo");

  if (hora < 12) {
    document.getElementById("Time").innerHTML = "Bom dia!";
    document.getElementById("Time").style.color = "#ff9900";
    document.getElementById("Time").style.textShadow = "0vw 0vw 2vw";
  } else if (hora < 18) {
    document.getElementById("Time").innerHTML = "Boa tarde!";
    document.getElementById("Time").style.color = "#ffbf5e";
    document.getElementById("Time").style.textShadow = "0vw 0vw 2vw";
  } else {
    document.getElementById("Time").innerHTML = "Boa noite!";
    document.getElementById("Time").style.color = "#65c6f0";
    document.getElementById("Time").style.textShadow = "0vw 0vw 2vw";
  }
}

Horario();
