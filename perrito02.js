var start = new Date().getTime();


		function getRandomColorBack() {

			var letters = '0123456ABCDEF'.split('');
			
			var color = '#';

			for (var i = 0; i < 6; i++) {
				
				color += letters[Math.floor(Math.random() * 16)];

			}

			return color;

		}


		document.querySelector("body").style.backgroundColor = getRandomColorBack();


		var audio = document.getElementById("audio");
  					
  					audio.volume = 0.5;
  					

		function getRandomColor() {

			var letters = '0123456ABCDEF'.split('');
			
			var color = '#';

			for (var i = 0; i < 6; i++) {
				
				color += letters[Math.floor(Math.random() * 16)];

			}

			return color;

		}

		function aparecerForma() {

			var top = Math.random() * 200;

			var left = Math.random() * 800;
			
			var width = (Math.random() * 200) + 100;

			document.querySelector("#forma").style.top = top + "px";

			document.querySelector("#forma").style.backgroundColor = getRandomColor();

			document.querySelector("#forma").style.left = left + "px";

			document.querySelector("#forma").style.width = width + "px";

			document.querySelector("#forma").style.height = width + "px";

			document.querySelector("#forma").style.display = "block";

			start = new Date().getTime();

		}

		function aparecerFormaDespues() {

			setTimeout(aparecerForma, Math.random() * 500);

		}

		aparecerFormaDespues();

		document.querySelector("#forma").onclick = function() {

			document.querySelector("#forma").style.display = "none";

			var end = new Date().getTime();
			
			var tiempoTomado = (end - start) / 1000;
			
			document.querySelector("#tiempoTomado").innerHTML = tiempoTomado + "s";

			aparecerFormaDespues();

		}


