function tambahtodolist() {
	const input = document.querySelector("#todolist")
	const text = input.value.trim();
	if (text=="") {
		alert("masukkan list terlebih dahulu")
		return 
	}
	const li = document.createElement("li");
	li.textContent = text;
	const ul = document.querySelector("#list")
	ul.appendChild(li);
	input.value = ""
	const checkbox = document.createElement("input")
	checkbox.type = "checkbox"
	li.appendChild(checkbox)


}
