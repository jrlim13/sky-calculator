/*
function startUp() {
	$("#formResult").hide();
}*/
 
function getExp() {
	var first = $("#first").val();
	var second = $("#second").val();
	
	if(first && second) {
		$("#result").val(Math.pow(first, second));
		//$("#formResult").show();
		alert("Computed Successfully!");
	} else {
		alert("Invalid Input");
	}
}

function getSqrt() {
	var first = $("#first").val();
	
	if(first) {
		$("#result").val(Math.sqrt(first));
		//$("#formResult").show();
		alert("Computed Successfully!");
	} else {
		alert("Invalid Input");
	}
}

function getSum() {
	var first = $("#first").val();
	var second = $("#second").val();

	if(first && second) {
		$("#result").val(+first + +second);
		//$("#formResult").show();
		alert("Computed Successfully!");
	} else {
		alert("Invalid Input");
	}
}

function getDiff() {
	var first = $("#first").val();
	var second = $("#second").val();

	if(first && second) {
		$("#result").val(+first - +second);
		//$("#formResult").show();
		alert("Computed Successfully!");
	} else {
		alert("Invalid Input");
	}
}

function getProd(){
	var first = $("#first").val();
	var second = $("#second").val();

	if(first && second) {
		$("#result").val(+first * +second);
		//$("#formResult").show();
		alert("Computed Successfully!");
	} else {
		alert("Invalid Input");
	}
}

function getDiv(){
	var first = $("#first").val();
	var second = $("#second").val();

	if(first && second) {
		$("#result").val(+first / +second);
		//$("#formResult").show();
		alert("Computed Successfully!");
	} else {
		alert("Invalid Input");
	}
}
