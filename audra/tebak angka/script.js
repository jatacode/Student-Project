const random_number = Math.floor(Math.random() * 100)
console.log (random_number)
const message = document.querySelector("#message")
const input = document.querySelector("input")
function guessnumber() {
	let usernumber = input.value 
	if (usernumber==random_number) {
		message.textContent="Kamu menebak angka ini dengan benar"
	}
	else if (usernumber>random_number) {
		message.textContent="Angka ini terlalu besar"
	}
	else if (usernumber<random_number) {
		message.textContent="Angka ini terlalu kecil"
	}
}