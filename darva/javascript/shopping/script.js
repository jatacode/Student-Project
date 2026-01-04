const sepatu=document.querySelector("#sepatu")
const jam=document.querySelector("#jam")
const baju=document.querySelector("#baju")
const product={
	sepatu:{nama:"sepatu",harga:100000000},
	jam:{nama:"jam",harga:500000000},
	baju:{nama:"baju",harga:500000000}
}
const total=document.querySelector("#total")
let cart=[];
let totalbelanja=0
sepatu.addEventListener("click",function(){
	//alert("Kamu membeli sepatu")
	cart.push(product.sepatu)
	console.log(cart)

	const hitung=hitungbarang(cart)
	console.log(hitung)

	totalbelanja=totalbelanja+product.sepatu.harga
	total.innerHTML=totalbelanja.toLocaleString("id-ID")
})
jam.addEventListener("click",function(){
	//alert("Kamu membeli jam")
	totalbelanja=totalbelanja+product.jam.harga
	total.innerHTML=totalbelanja.toLocaleString("id-ID")
	const hitung=hitungbarang(cart)
	console.log(hitung)

})
baju.addEventListener("click",function(){
	//alert("Kamu membeli baju")
	totalbelanja=totalbelanja+product.baju.harga
	const hitung=hitungbarang(cart)
	console.log(hitung)

	total.innerHTML=totalbelanja.toLocaleString("id-ID")
})
function hitungbarang(cart){
	let count={}
	cart.forEach(item=>{
		if(count[item]){
			count[item]+=1
		}else{
			count[item]=1
		}
	})
	return count
}