// siapkan variabel untuk tombol yang akan digunakan
const btnKemeja = document.querySelector("#btn-kemeja")
const btnCelana = document.querySelector("#btn-celana")
const btnSepatu = document.querySelector("#btn-sepatu")
const total = document.querySelector("#total")
const products={
	Kemeja:{nama:"kemeja",harga:150.000},
	Celana:{nama:"celana",harga:200.000},
	Sepatu:{nama:"Sepatu",harga:278.000}
}

let cart=[]
let totalBelanja=0;

btnKemeja.addEventListener("click",function(){
	//alert("Kamu membeli Kemeja")
	cart.push(products.Kemeja)
	console.log(cart)
	totalBelanja=totalBelanja+products.Kemeja.harga
	total.innerHTML=totalBelanja.toLocaleString("id-ID")
})

btnCelana.addEventListener("click",function(){
	//alert("Kamu membeli Celana")
	cart.push(products.Celana)
	console.log(cart)
	totalBelanja=totalBelanja+products.Celana.harga
	total.innerHTML=totalBelanja.toLocaleString("id-ID")
})

btnSepatu.addEventListener("click",function(){
	//alert("Kamu membeli Sepatu")
	cart.push(products.Sepatu)
	console.log(cart)
	totalBelanja=totalBelanja+products.Sepatu.harga
	total.innerHTML=totalBelanja.toLocaleString("id-ID")
})
