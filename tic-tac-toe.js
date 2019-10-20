
document.write("Why you not working?");
 
window.onload = function (){
	/*var t = document.querySelectorAll("div");
	var i = t[3].setAttribute("class", "square");
	var ii = t[4].setAttribute("class", "square");
	var iii = t[5].setAttribute("class", "square");
	var iv = t[6].setAttribute("class", "square");
	var v = t[7].setAttribute("class", "square");
	var vi = t[8].setAttribute("class", "square");
	var vii = t[9].setAttribute("class", "square");
	var viii = t[10].setAttribute("class", "square");
	var ix = t[11].setAttribute("class", "square");


	var up = document.getElementById("zen");

	var up = document.getElementById("zen");
	up.addEventListener("mouseover", Ham);
	
	function Ham () {
		up.style.backgroundColor = "red";
	};

	ix.addEventListener("mouseover", Gamer); 
	function Gamer () {
		ix.style.backgroundColor = "blue";
	};*/
	/*var boxes = document.getElementById("board");*/


	var boxes = document.getElementById("board").querySelectorAll("div");
	var i;
	for (i = 0; i < boxes.length; i++) {
		boxes[i].setAttribute("class", "square");
	}

	
	var track = [ "#", '#', "#", "#", "#", "#", "#", "#", "#"];
	var box0 = boxes[0];
    
    box0.addEventListener("click", Gamer); 
	function Gamer () {
		if ( box0 == null ) {
			box0.innerHTML = "X";
			box0.classList.add("square", "square.X");
		
		}else{
			console.log('Please select another square');
		}
		
	};
	
	
	/*
	boxes.onclick = function() {
		boxes.setAttribute("class", "square.X");
	};*/

}


document.write("Why you not working?");


/*window.onload = function (){
	var x = document.getElementById("board");
	x.setAttribute("class", "square");

};*/


/*var w= document.getElementById("status");
	w.style.backgroundColor = "yellow";
var x = document.getElementById("board");

	x.style.backgroundColor = "green";
	var c = document.getElementById("board").childNodes.innerHTML = "Walk away now"; 
document.body.style.backgroundColor = "red";*/

/*alert("Run away while you can");*/

/*document.addEventListener('DOMContentLoaded', ()
document.getElementsByTagName("div").setAttribute("class", "square");*/

/*document.getElementsByTagName("div").classList.add("square");


var fixC = document.getElementById("board").childNodes;*/

/*
window.onload = function() {
	return fixC.classList.add("square");
};*/

/*
getElementById("try").style.height = 100;
getElementById("try").style.width = 100;
getElementById("try").style.backgroundColor = 'black';*/



