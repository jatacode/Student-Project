//Variabel
//menyimpan nilai (value)
// python -> n = "adhi"

//const => nilai tidak bisa diubah
//let => nilai bisa dirubah

//biodata
//prompt

// let random =  Math.random()*10
// random = Math.floor(random)
// console.log(random)

// const guess = prompt("Masukkan tebakan angka anda (1-10)")
// if (random==guess){
// 	alert("Tebakan Kamu benar")
// }else{
// 	alert("Tebakan kamu salah")
// }

const number1 = document.getElementById("number1")
const number2 = document.querySelector("#number2")
const p = document.querySelector("p")
const operator = document.querySelector("#operator")

function calculate(){
	let result=0
	if (operator.value=="+"){
		result = Number(number1.value) + Number(number2.value)
	}
	else if (operator.value=="-"){
		result = Number(number1.value) - Number(number2.value)
	}
	else if (operator.value=="*"){
		result = Number(number1.value) * Number(number2.value)
	}
	else if (operator.value=="/"){
		result = Number(number1.value) / Number(number2.value)
	}
	p.innerHTML = result
}

const number3 = document.getElementById("number3")
const number4 = document.querySelector("#number4")
const p2 = document.querySelector("#p2")
const tipe = document.querySelector("#tipe")

function calculate2(){
	let result=0
	if (tipe.value=="persegi"){
		result = Number(number3.value) * Number(number4.value)
	}
	else if (tipe.value=="segitiga"){
		result = 1/2 * Number(number3.value) * Number(number4.value)
	}
	else if (tipe.value=="trapesium"){
		result = 1/2 * Number(number3.value) * Number(number4.value)
	}
	else if (tipe.value=="jajar genjang"){
		result = Number(number3.value) * Number(number4.value)
	}
	p2.innerHTML = result
}

const number5 = document.getElementById("number5")
const number6 = document.querySelector("#number6")
const number7 = document.querySelector("#number7")
const p3 = document.querySelector("#p3")
const tipe1 = document.querySelector("#tipe1")

function calculate3(){
	let result=0
	if (tipe1.value=="kubus"){
		result = Number(number5.value) * Number(number6.value) * Number(number7.value)
	}
	else if (tipe1.value=="balok"){
		result = Number(number5.value) * Number(number6.value) * Number(number7.value)
	}
	else if (tipe1.value=="kerucut"){
		result = 1/3 * Number(number5.value) * Number(number6.value) * Number(number7.value)
	}
	p3.innerHTML = result
}