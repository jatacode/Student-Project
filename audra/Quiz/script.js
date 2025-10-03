const question = document.querySelector("p")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4")
const message = document.querySelector("#message")
const quiz = [
	{
		question:"ada barang apa saja di ruang tamu",
		option1:"kursi",
		option2:"tempat tidur",
		option3:"toilet",
		option4:"meja makan",
		answer:"kursi"
	},
	{
		question:"ada barang apa saja di toilet",
		option1:"meja belajar",
		option2:"tv",
		option3:"toilet",
		option4:"sofa",
		answer:"toilet"
	},
	{
		question:"ada barang apa saja di kamar tidur",
		option1:"bathub",
		option2:"kompor",
		option3:"kulkas",
		option4:"selimut",
		answer:"selimut"
	},
	{
		question:"ada barang apa saja di dapur",
		option1:"mesin cuci",
		option2:"kulkas",
		option3:"lemari baju",
		option4:"meja rias",
		answer:"kulkas"
	},
	{
		question:"ada barang apa saja di garasi",
		option1: "rak sepatu",
		option2: "wastafel",
		option3: "sabun mandi",
		option4: "gelas",
		answer: "rak sepatu"
	}

]
console.log (quiz[0].question)
let index = 0
showquestion()
function buttonsatu () {
console.log(quiz[index].answer)
console.log(option1.innerHTML)
if (quiz[index].answer==option1.innerHTML) {
	console.log("benar")
	message.innerHTML="benar"
	message.style.color="#54b53b"
}
else {
	console.log("salah")
	message.innerHTML="salah"
	message.style.color="#cf2635"
}
// hapus pesan setelah 2 detik
  setTimeout(() => {
    message.textContent = "";
  }, 2000);
index=index+1
showquestion()
}
function buttondua () {
console.log(quiz[index].answer)
console.log(option2.innerHTML)
if (quiz[index].answer==option2.innerHTML) {
	console.log("benar")
	message.innerHTML="benar"
	message.style.color="#54b53b"
}
else {
	console.log("salah")
	message.innerHTML="salah"
	message.style.color="#cf2635"
}
// hapus pesan setelah 2 detik
  setTimeout(() => {
    message.textContent = "";
  }, 2000);
index=index+1
showquestion()
}
function buttontiga () {
console.log(quiz[index].answer)
console.log(option3.innerHTML)
if (quiz[index].answer==option3.innerHTML) {
	console.log("benar")
	message.innerHTML="benar"
	message.style.color="#54b53b"
}
else {
	console.log("salah")
	message.innerHTML="salah"
	message.style.color="#cf2635"
}
// hapus pesan setelah 2 detik
  setTimeout(() => {
    message.textContent = "";
  }, 2000);
index=index+1
showquestion()
}
function buttonempat () {
console.log(quiz[index].answer)
console.log(option4.innerHTML)
if (quiz[index].answer==option4.innerHTML) {
	console.log("benar")
	message.innerHTML="benar"
	message.style.color="#54b53b"
}
else {
	console.log("salah")
	message.innerHTML="salah"
	message.style.color="#cf2635"
}
// hapus pesan setelah 2 detik
  setTimeout(() => {
    message.textContent = "";
  }, 2000);
index=index+1
showquestion()
}
function showquestion () {
question.innerHTML= quiz[index].question
option1.innerHTML= quiz[index].option1
option2.innerHTML= quiz[index].option2
option3.innerHTML= quiz[index].option3
option4.innerHTML= quiz[index].option4
}