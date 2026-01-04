const submit=document.querySelector("#submit")
const input=document.querySelector("input")
const ul=document.querySelector("#task-list")

submit.addEventListener("click",function(){
	if(input.value==""){
		alert("masukkan text")
		return
	}
	let teksInput=input.value

	const li=document.createElement("li")
	li.innerHTML=teksInput
	ul.appendChild(li)
	input.value=""

    const deleteButton=document.createElement("button")
    deleteButton.innerHTML="hapus"
	deleteButton.addEventListener("click",function(){
		ul.removeChild(li)
	})
	li.appendChild(deleteButton)
})