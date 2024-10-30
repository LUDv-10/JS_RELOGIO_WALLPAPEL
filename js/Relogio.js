const HorasElement = document.getElementById("horas");
const minutosElement = document.getElementById("minutos");

function newTime() {
  const date = new Date();

  const Horas = date.getHours();

  const Minutos = date.getMinutes();


  HorasElement.textContent = fixTime(Horas);
  minutosElement.textContent = fixTime(Minutos);

}

function fixTime(time) {
  if (time < 10) {
    return "0" + time;
  }
  return time;
}

newTime();
setInterval(newTime, 1);
