

var start = new Date().getTime();


function aparecerForma() {

	var top = Math.random() * 200;

	var left = Math.random() * 800;
}		
			
	

document.querySelector("#forma").style.display = "block"

document.querySelector("#forma").style.top = top + "px";

document.querySelector("#forma").style.left = left + "px";


function aparecerFormaDespues() {

	setTimeout(aparecerForma, Math.random() * 2000);

}

aparecerFormaDespues();

	document.querySelector("#forma").onclick = function() {

		document.querySelector("#forma").style.display = "none";
			
		var end = new Date().getTime();
			
		var tiempoTomado = (end - start) / 1000;
			
		document.querySelector("#tiempoTomado").innerHTML = tiempoTomado + "s";
			
		aparecerFormaDespues();

	}