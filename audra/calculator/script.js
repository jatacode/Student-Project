const p = document.querySelector("#hasil")
const p2 = document.querySelector("#hasilluas")
p.innerHTML= "hasilnya adalah..."
const body = document.querySelector("body")
function ubahWarna(){
body.style.backgroundColor= "#FFF2BE"
}
function pertambahan(){
const angkapertama= document.querySelector("#angkapertama")
const angkakedua = document.querySelector("#angkakedua")
const hasil = parseFloat(angkapertama.value)+ parseFloat(angkakedua.value)
p.innerHTML= "hasilnya adalah " +hasil.toString()
}
function perkalian(){
const angkapertama= document.querySelector("#angkapertama")
const angkakedua = document.querySelector("#angkakedua")
const hasil = parseFloat(angkapertama.value)* parseFloat(angkakedua.value)
p.innerHTML= "hasilnya adalah " +hasil.toString()
}
function pengurangan(){
const angkapertama= document.querySelector("#angkapertama")
const angkakedua = document.querySelector("#angkakedua")
const hasil = parseFloat(angkapertama.value)- parseFloat(angkakedua.value)
p.innerHTML= "hasilnya adalah " +hasil.toString()
}
function pembagian(){
const angkapertama= document.querySelector("#angkapertama")
const angkakedua= document.querySelector("#angkakedua")
const hasil= parseFloat(angkapertama.value)/ parseFloat(angkakedua.value)
p.innerHTML= "hasilnya adalah " +hasil.toString()
}
function mainfunction(){
const operator= document.querySelector("#operator")
if (operator.value=="pertambahan") {
	pertambahan()
}
else if (operator.value=="pengurangan") {
	pengurangan()
}
else if (operator.value=="perkalian") {
	perkalian()
}
else if (operator.value=="pembagian") {
	pembagian()
}
}
function luas(){
const bangundatar= document.querySelector("#bangundatar")
if (bangundatar.value=="persegi") {
const numbersatu= document.querySelector("#numbersatu")
const numberdua= document.querySelector("#numberdua")
const hasil= parseFloat(numbersatu.value)* parseFloat(numberdua.value)
p2.innerHTML= "hasilnya adalah " +hasil.toString()
}
else if (bangundatar.value=="persegi panjang") {
const numbersatu= document.querySelector("#numbersatu")
const numberdua= document.querySelector("#numberdua")
const hasil= parseFloat(numbersatu.value)* parseFloat(numberdua.value)
p2.innerHTML= "hasilnya adalah "+hasil.toString()
}
else if (bangundatar.value=="segitiga") {
const numbersatu= document.querySelector("#numbersatu")
const numberdua= document.querySelector("#numberdua")
const hasil= (parseFloat(numbersatu.value)* parseFloat(numberdua.value))/2
p2.innerHTML= "hasilnya adalah "+hasil.toString()
}
else if (bangundatar.value=="trapesium") {
const numbersatu= document.querySelector("#numbersatu")
const numberdua= document.querySelector("#numberdua")
const hasil= (parseFloat(numbersatu.value)* parseFloat(numberdua.value))/2
p2.innerHTML= "hasilnya adalah "+hasil.toString()
}
else if (bangundatar.value=="layang-layang") {
const numbersatu= document.querySelector("#numbersatu")
const numberdua= document.querySelector("#numberdua")
const hasil= (parseFloat(numbersatu.value)* parseFloat(numberdua.value))/2
p2.innerHTML= "hasilnya adalah "+hasil.toString()
}
else if (bangundatar.value=="bujur sangkar") {
const numbersatu= document.querySelector("#numbersatu")
const numberdua= document.querySelector("#numberdua")
const hasil= parseFloat(numbersatu.value)* parseFloat(numberdua.value)
p2.innerHTML= "hasilnya adalah "+hasil.toString()
}
}