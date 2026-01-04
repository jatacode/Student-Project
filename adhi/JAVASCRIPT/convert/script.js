const select= document.querySelector("#select")
const input=document.querySelector("#nilai")
const hasil=document.querySelector("#hasil")

let conversi=0
function hitung (){
	if(select.value=="km"){
		let number=input.value
		conversi=number*1000
		hasil.innerHTML=conversi
	}
	else if (select.value=="mk") {
		let number=input.value
		conversi=number/1000
		hasil.innerHTML=conversi
	}
	else if (select.value=="ck") {
		let number=input.value
		conversi=number+273
		hasil.innerHTML=conversi
	}
	else if (select.value=="kc") {
		let number=input.value
		conversi=number-273
		hasil.innerHTML=conversi
	}
}