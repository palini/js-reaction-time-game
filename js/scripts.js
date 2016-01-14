		var createdTime;
		var clickedTIme;
		var reactionTime;
		//var myArray = ["red","green","blue","yellow","orange"];
		var obj = [2];
			obj[0] =  document.getElementById("circle");
			obj[1] =  document.getElementById("box");
			
		console.log("Enters the script")
		var randomselection;
		var i;
		displaybox();

		function getRandomColor() {
			var letters = '0123456789ABCDEF'.split('');
			var color = '#';
			for(var i = 0 ; i<6; i++){
				color += letters[Math.round(Math.random()*15)];
				//console.log(Math.random()*15);
				//console.log(color);
			}
			return color;
		}
		console.log(getRandomColor());
		function displaybox(){
			var randomtime = Math.floor(Math.random() * 5000);
			randomselection = Math.floor(Math.random()*2);
			var positiontop = Math.floor(Math.random() * 300);
			var positionleft = Math.floor(Math.random() * 300);
			console.log(positiontop);
				setTimeout(function(){
					randomArraySelection = Math.floor(Math.random() * 4);
					obj[randomselection].style.backgroundColor = getRandomColor(); 
					obj[randomselection].style.display = "block";
					//obj[randomselection].style.background = myArray[randomArraySelection];
					obj[randomselection].style.top = positiontop + "px";
					obj[randomselection].style.left = positionleft + "px";
					createdTime = Date.now();
				},randomtime);
		//displaybox end
		obj[randomselection].onclick = function() {
			console.log("Enters the onclick")
			clickedTime = Date.now();
			console.log("Clicked Time " + clickedTime); 
			reactionTime = (clickedTime - createdTime )/1000;
			document.getElementById("time").innerHTML = reactionTime;
			this.style.display = "none";
			obj[randomselection].style.display = "none";
			displaybox();
		}
	}