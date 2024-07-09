let formulario = document.querySelector(".form");
formulario.addEventListener("submit", event => HandleSubmit(event));

function HandleSubmit(event){
  event.preventDefault();
  let team = event.target.elements.team.value;
  if(document.querySelector(".resultado")) {
    document.querySelector(".resultado").remove(); }
  let resultado = calcularEquipo(team);
  let textoResultado = document.createElement("h1");
  textoResultado.classList.add("resultado");
  textoResultado.textContent = resultado;
  document.body.append(textoResultado);
}
function calcularEquipo(team) {
  const equipos = {
    equipo1: ["Pipe", "Juarez", "Finlai", "Felipe", "Bruno", "Jere"],
    equipo2: ["Santi", "Uru", "Amigo de Uru", "Cain", "Amigo de Caín", "Sebas"]
  };

  return equipos[team] ? equipos[team].join(", ") : "Equipo no encontrado";
}