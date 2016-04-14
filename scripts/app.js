/**
 * Created by esattahaibis on 2016-02-11.
 */
/**
 * Created by esattahaibis on 2016-02-04.
 * File name app.js
 * Desc contains custom JavaScript code for Esat's Bio
 */

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


})();
