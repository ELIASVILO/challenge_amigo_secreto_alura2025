const entradaAmigo = document.getElementById("amigo"); //variable referencia entrada texto
const listaAmigos = []; //array guardar nombres en lista
const ulListaAmigos = document.getElementById("listaAmigos"); //variable relaciona elemento en el html lista "ul"
const ulResultado = document.getElementById("resultado"); //variable para publicar resultado

//funcion agregar nombres, esta relacionado con el boton añadir al hacer click
function agregarAmigo() {
    if (!entradaAmigo.value){ //operador de negacion alerta por añadir dato vacio
        alert("Debes ingresar un nombre");
        return; // Detiene la ejecución si el campo está vacío
    }
    
    listaAmigos.push(entradaAmigo.value); //añadiendo nombres al array
    ulListaAmigos.innerHTML += `<li>${entradaAmigo.value} </li>`; //ordena en forma de lista, se usa el template string para combinar datos con codigo

    // limpiar el campo de texto
    entradaAmigo.value = '';
}
//funcion de sorteo
function sortearAmigo(){
    if (listaAmigos.length === 0){ //permite el sorteo solo cuando hay mas de un nombre
        alert("Debes ingresar al menos un nombre para hacer el sorteo");
        return;
    }
    const random =(Math.floor((Math.random() *listaAmigos.length))); //numero random, de acuerdo a numero de datos de lista
    const amigoSecreto = listaAmigos[random]; //asignar numero aleatorio a lista
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`  //publicar el amigo secreto




}


