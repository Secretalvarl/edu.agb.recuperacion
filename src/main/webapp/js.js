let palabra;
let letra;

const lista = [];

function anyadir(){
	
	do{
		palabra = prompt("Escriba la palabra a adivinar");
		
		for(let i = 0; i < palabra.length; i++){
			
			palabra[i] = "*";
			
		}
		lista.push(palabra);
		
	}while(palabra.length >= 10);
	
	mostrarPalabra();
}

function mostrarPalabra(){
	
	const palabras = document.getElementById("palabra");
	
	let escribir = "";
	
	palabras.innerHTML="";
	
	
	escribir = "<p>" + "Palabra:" + lista[i] + "<p>"
			
	palabras.innerHTML = "<div>" + escribir + "<div>";
	
	
	
}

function letrasDadas(){
	do{
		letra = prompt("Escriba una letra");
			let intentos = 0;
			
			for(let i = 0; i < palabra.length; i++){
				
				
				if (letra != palabra[i].some){
					
					alert("Esa letra no esta en la plabra");
					intentos ++;
					console.log("Contador = " + intentos);
					
				} 
				if (letra == palabra[i]){
					
					alert("has acertado la letra")
					
				}	
			}
					
	}while(intentos = 6, palabra.some != "*");
	
		
	
	
	
}