let formulario = document.querySelector(".form");
formulario.addEventListener("submit", event => HandleSubmit(event));

function HandleSubmit(event){
  event.preventDefault();
  let numero = parseInt(event.target.numero.value);
  if(document.querySelector(".resultado")){
    document.querySelector(".resultado").remove();
  }
  let resultado = Fibonacci(numero);
  textoResultado = document.createElement("h1");
  textoResultado.classList.add("resultado");
  textoResultado.textContent = resultado;
  document.body.append(textoResultado);

}

function Fibonacci(numero){
  if (isNaN(numero)){
    return 'Tenes que completar el campo';
}
  let g = 1;
  let f = 0;
  let temp = 0;
  // mientras i sea menor o igual al input del usuario
  for(let i = 1; i <= numero; i++){
      temp = g + f; // temp toma el resultado de la suma de los dos valores anteriores en la sucesión
      g = f; // g pasa a valer f, osea toma el puesto del anterior valor al actual
      f = temp; // f pasa a valer temp
  }
  return f;

}