function convert() {
	var amount = document.getElementById("valAmount").value;
	var fromCur = document.getElementById("slFromCurr").value;
	var toCur = document.getElementById("slToCurr").value;
	
	var result = parseInt(amount) / getRate(fromCur) * getRate(toCur);
	document.getElementById("result").innerHTML = result;
}

function getRate(currency) {
	if (currency == "USD") {
		return 1;
	} else if (currency == "VND") {
		return 23267.04;
	} else if (currency == "AUD") {
		return 1.41278;
	} else if (currency == "EUR") {
		return 0.844186;
	} else if (currency == "CAD") {
		return 1.31114;
	} else{
		return 1;
	}
}