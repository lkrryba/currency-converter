// document.body.innerHTML = "testing 123";
function exchangeMoney() {
	let originalCurrencyAmount = document.getElementById(
		"original-currency-amount"
	).value;

	let originalCurrencyUnit = document.getElementById("original-currency-unit")
		.value;

	let exchangeRate = document.getElementById("exchange-rate").value;

	let newCurrencyUnit = document.getElementById("new-currency-unit").value;

	let newCurrencyAmount = Math.floor(originalCurrencyAmount * exchangeRate);

	document.getElementById(
		"output-text"
	).innerHTML = `Your <span>${originalCurrencyAmount}</span> <span>${originalCurrencyUnit}</span> will currently buy you <span>${newCurrencyAmount}</span> <span>${newCurrencyUnit}</span>`;
}
