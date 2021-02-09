function mix(){
	boxes.sort(function() {return Math.random() - 0.5});
	console.log(boxes);
}
function uncheck(){
	for (var i = 1; i <= 9; i++) {
		document.getElementById("img"+i).style.border = null;
		//document.getElementById("img"+i).style.visibility = "visible";
	}
}
function select(box){
	console.log(box);
	switch (box) {
  case 6:
    if (true) {
			document.getElementById("img9").src = "image/img6.jpg";
			document.getElementById("img9").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (false) {
			document.getElementById("img3").src = "image/img6.jpg";
			document.getElementById("img3").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (false) {
			document.getElementById("img5").src = "image/img6.jpg";
			document.getElementById("img5").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
    break;
  case 2:
        if (true) {
			document.getElementById("img9").src = "image/img6.jpg";
			document.getElementById("img9").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (false) {
			document.getElementById("img3").src = "image/img6.jpg";
			document.getElementById("img3").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (false) {
			document.getElementById("img5").src = "image/img6.jpg";
			document.getElementById("img5").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
    break;
  case 4:
        if (true) {
			document.getElementById("img9").src = "image/img6.jpg";
			document.getElementById("img9").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (false) {
			document.getElementById("img3").src = "image/img6.jpg";
			document.getElementById("img3").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (false) {
			document.getElementById("img5").src = "image/img6.jpg";
			document.getElementById("img5").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
    break;
  case 8:
  	    if (true) {
			document.getElementById("img9").src = "image/img6.jpg";
			document.getElementById("img9").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (false) {
			document.getElementById("img3").src = "image/img6.jpg";
			document.getElementById("img3").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (false) {
			document.getElementById("img5").src = "image/img6.jpg";
			document.getElementById("img5").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}

    break;
  case 1:
  		if (true) {
			document.getElementById("img9").src = "image/img6.jpg";
			document.getElementById("img9").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (false) {
			document.getElementById("img3").src = "image/img6.jpg";
			document.getElementById("img3").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
    break;
  case 3:
    	if (true) {
			document.getElementById("img9").src = "image/img6.jpg";
			document.getElementById("img9").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (false) {
			document.getElementById("img3").src = "image/img6.jpg";
			document.getElementById("img3").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
    break;
    case 7:
    	if (true) {
			document.getElementById("img9").src = "image/img6.jpg";
			document.getElementById("img9").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (false) {
			document.getElementById("img3").src = "image/img6.jpg";
			document.getElementById("img3").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
    break;
    case 9:
    	if (true) {
			document.getElementById("img9").src = "image/img6.jpg";
			document.getElementById("img9").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (false) {
			document.getElementById("img3").src = "image/img6.jpg";
			document.getElementById("img3").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
    break;
    case 5:
    	if (true) {
			document.getElementById("img9").src = "image/img6.jpg";
			document.getElementById("img9").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (false) {
			document.getElementById("img3").src = "image/img6.jpg";
			document.getElementById("img3").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (true) {
			document.getElementById("img9").src = "image/img6.jpg";
			document.getElementById("img9").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
		if (false) {
			document.getElementById("img3").src = "image/img6.jpg";
			document.getElementById("img3").style.visibility = "visible";
			document.getElementById("img6").style.visibility = "hidden";
		}
    break;
  default:

}

	uncheck();
	document.getElementById("img"+box).style.border = "1px solid blue";
}
function refrescarPuzzle() {
	for (var i = 0; i <= 8; i++) {
		var imagen = boxes[i];
		document.getElementById('img'+i).src = "image/img"+imagen+".jpg";
	}
}
var boxes = [1,2,3,4,5,6,7,8,9];
mix();
