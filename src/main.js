(function(){

//variables

var lista= document.getElementById("lista"),
	tareaInput = document.getElementById("tareaInput"),
	btnNuevaTarea=document.getElementById("btn-agregar");

//funciones
var agregarTarea= function(){
	var tarea=tareaInput.value,
	nuevaTarea =document.createElement("li")
	enlace=document.createElement("a")
	contenido= document.createTextNode(tarea);

if(tarea===""){
	tareaInput.setAttribute("placeholder","agregar algo bueno bobo cagado");
	tareaInput.className="error";	
	return false;

}
    enlace.appenChild(contenido);
	element.setAttribute("href","#");
	nuevaTarea.appenChild(enlace);
	lista.appenChild(nuevaTarea);

tareaInput.value="";

};

var comprobarInput= function(){
	tareaInput.className="";
	tareaInput.setAttribute("placeholder","agregar tarea");

};

var eliminarTarea= function(){
	alert("holi");
};
//eventos

//agregar tarea
btnNuevaTarea.addEventListener("click",agregarTarea);

//comprobar inmput
tareaInput.addEventListener("click",comprobarInput);

//evento para lista

for (var i=0;i<= lsita.children.length -1; i++){
	lista.children[i].addEventListener("click",eliminarTarea);



}
}());