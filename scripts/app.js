/// <reference path="../typings/tsd.d.ts" />

(function(){
	/* Crating array for dom objects */
	var domObjects = new Array();
	domObjects.push(document.getElementById("paragraphOne"));
	domObjects.push(document.getElementById("paragraphTwo"));
	domObjects.push(document.getElementById("projectOneTitle"));
	domObjects.push(document.getElementById("projectOneText"));
	domObjects.push(document.getElementById("projectTwoTitle"));
	domObjects.push(document.getElementById("projectTwoText"));
	domObjects.push(document.getElementById("projectThreeTitle"));
	domObjects.push(document.getElementById("projectThreeText"));

	/* Function that responsible creation of XMLHttp object*/
	function createXMLHttp() {
		var request;
		if(window.ActiveXObject){
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");
			}catch (e) {
				request = false;
			}
		}else {
			try {
				request = new XMLHttpRequest();
			} catch (e) {
				request = false;
			}
		}

		if(!request) {
			alert("Something went wrong object couldn't created. Try again Later!")
		}else {
			return request;
		}
	}

	var request = createXMLHttp();
	request.open('GET', 'data.json', true);
	request.send();
	// This event listener listens state changes in the XMLHttp request object
	// if the ready state is 4 which means object is ready to read, after that we inject our text into HTML
	request.addEventListener('readystatechange', function() {
		if (request.readyState == 4){
			//var text = new Object();
			var index = 0;
			 var text = JSON.parse(request.responseText);
			console.log(text);

			for (key in text) {
				domObjects[index].innerHTML = text[key];
				index++;
			}
		}
	});
	
	document.getElementById("btnSend").addEventListener("click", function(){
		alert("You succesfully sent your massage!");
		console.log('success');
		//this.className += ' scroll-top page-scroll';
		var uName = document.getElementById('name').value;
		var uEmail = document.getElementById('email').value;
		var uPhone = document.getElementById('phone').value;
		var uMessage = document.getElementById('message').value;
		// I'm using template strings from ECMAScript 6
		console.log(`Values that comes from User,\n Name: ${uName}\n E-mail: ${uEmail}\n Phone Number: ${uPhone}\n Message: ${uMessage}\n`);
		window.location.href = "#page-top";
	});

	// ------------------ Banner Ad section ----------------------

	//global variables
	var screenWidth = 600;
	var screenHeight = 70;

	// reference to canvas element
	var canvas = document.getElementById("canvas");
	canvas.setAttribute("width", screenWidth.toString());
	canvas.setAttribute("height", screenHeight.toString());

	// create a stage container object
	var stage = new createjs.Stage(canvas);

	var infoText = null;

	var callToAction = null;

	function init() {
		console.log("Initialization");
		// enable mouseover effects for all buttons
		stage.enableMouseOver(20);

		// set frame rate to 60 fps
		createjs.Ticker.framerate = 60;
		// listen for frame changes and call the animationLoop function
		createjs.Ticker.on("tick", animationLoop);

		// call the main function
		main();
	}
	function animationLoop() {
		/*helloLabel.rotation += 5;
		 button.rotation += 5;
		 helloLabel.x += helloLabelMove;
		 button.x += buttonMove;
		 if ((helloLabel.x >= screenWidth) || (helloLabel.x <= 0)) {
		 helloLabelMove *= -1;
		 buttonMove *= -1;
		 }

		 // refresh the stage object
		 stage.update();*/



	}

	// this is where all the magic happens
	function main() {
		
		infoText = new createjs.Text
		/*button = new createjs.Bitmap('/COMP1073%20-%20Lesson12%20-%20master/Assets/images/button.jpg');
		 button.regX = button.getBounds().width * 0.5;
		 button.regY = button.getBounds().height * 0.5;
		 button.scaleX = 0.3;
		 button.scaleY = 0.3;
		 button.x = screenWidth * 0.5;
		 button.y = screenHeight * 0.5;
		 stage.addChild(button);

		 helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
		 helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
		 helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
		 helloLabel.x = screenWidth * 0.5;
		 helloLabel.y = screenHeight * 0.5;
		 stage.addChild(helloLabel);

		 button.on("click", function() {
		 helloLabel.text = "Clicked!";
		 helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
		 helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
		 });

		 button.on('mouseover', function() {
		 button.alpha = 0.5;
		 });

		 button.on('mouseout', function() {
		 button.alpha = 1;
		 });*/




	}

	window.onload = init;

})();
