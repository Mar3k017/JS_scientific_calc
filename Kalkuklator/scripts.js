
//var box = document.getElementById('display');
var base;
var exponent = 10;
var isSuperMight = false;

function addtoScreen(inputValue) {
	forma.display.value += inputValue;
	
	if (inputValue === 'C') {
		forma.display.value = '';
	}
}

function answer() {
	inputValue = forma.display.value;
	inputValue = eval(inputValue);
	forma.display.value = inputValue;
	forma.display.value = inputValue;
}

function power(){
	inputValue = forma.display.value;
	inputValue = eval(inputValue * inputValue);
	forma.display.value = inputValue;
}

function might(){
	isSuperMight = true;
	base = forma.display.value;
	forma.display.value = base+'^';
	inputValue = forma.display.value;
}

function backspace() {
	var oldValue = forma.display.value;
	var length = oldValue.length-1;
	var newValue = oldValue.substring(0,length);
	forma.display.value = newValue;
}

function sin() {
	inputValue = forma.display.value;
	inputValue = eval(Math.sin(inputValue));
	//inputValue = Math.sin(inputValue);
	forma.display.value = inputValue;
}

function cos() {
	inputValue = forma.display.value;
	inputValue = eval(Math.cos(inputValue));
	forma.display.value = inputValue;
}

function tan() {
	inputValue = forma.display.value;
	inputValue = eval(Math.tan(inputValue));
	forma.display.value = inputValue;
}

function sqrt() {
	inputValue = forma.display.value;
	inputValue = Math.sqrt(inputValue);
	forma.display.value = inputValue;
}

function cubeSqrt() {
	var a = forma.display.value;
	var n = 3;
	var result = a;
	//x^n-1
	var tmp = Math.pow(result,(n-1));
	//dokladnosc obliczen
	var e = 0.00000001;

	//dopoki wynik jest mniej dokladny niz zadana wartosc
	while (Math.abs(a - tmp * result)>= e) {
		//oblicz nowe przyblizenie
		result = 1/n*((n-1)*result + (a/tmp));
		//x^n-1
		tmp = Math.pow(result, n-1);
	}

	forma.display.value = result;
}

function log() {
	inputValue = forma.display.value;
	inputValue = Math.log(inputValue);
	forma.display.value = inputValue;
}

function ln10() {
	inputValue = Math.LN10;
	forma.display.value = inputValue;
}

function pi() {
	inputValue = Math.PI;
	forma.display.value = inputValue;
}

function eulerNumber() {
	inputValue = Math.E;
	forma.display.value = inputValue;
}

function round() {
	inputValue = forma.display.value;
	forma.display.value = Math.ceil(inputValue * 1000) / 1000;
}

function mathFactorial(value) {
	var result = 1;
	var reg = new RegExp("[0-9]+");
	//var reg = new RegExp("\\d+");
	value = forma.display.value;
	
	if(value.charAt(0) != "0" && reg.test(value)) {
		for (i=1; i<=value; i++) {
			result *= i;
		}
	} else {
		result = 'Error';
	}
	forma.display.value = result;
}

function changeSign(){
	forma.display.value *= (-1);
}

//eval jako paramtr przyjmuje wartość typu String! - funkcja działa poprawnie zwraca 4!
function answer1() {
	if(isSuperMight == false) {
		
		var x = new String("2 + 2");
		inputValue = forma.display.value;
		inputValue = eval(x.toString());

		forma.display.value = inputValue;
	}if (isSuperMight == true) {
		forma.display.value = "potęgowanie";
	}
}

function answer2() {
	if(isSuperMight == false){
		inputValue = forma.display.value;
		inputValue = eval(inputValue);
		forma.display.value = inputValue;
		forma.display.value = inputValue;
		
	} if (isSuperMight == true) {
		for (i=0; i<forma.display.value.length; i++) {
			if(forma.display.value.charAt(i) == '^') {
				exponent = forma.display.value.substr(i+1);
			}
		}
		isSuperMight = false;
		forma.display.value = Math.pow(base, exponent);
	}
}