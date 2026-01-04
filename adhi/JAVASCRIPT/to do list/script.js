const submit = document.querySelector("#submit");
const input = document.querySelector("input");
const ul = document.querySelector("#task-list");

submit.addEventListener("click", function() {
    // 1. Gunakan .trim() untuk mengecek jika input hanya berisi spasi
    if (input.value.trim() === "") {
        alert("Masukkan teks terlebih dahulu!");
        return; // Return harus di DALAM kurung kurawal agar hanya berhenti jika kosong
    }

    let teksInput = input.value;

    // 2. Buat elemen LI
    const li = document.createElement("li");
    li.textContent = teksInput + " "; // Menggunakan textContent lebih aman daripada innerHTML

    // 3. Buat tombol hapus
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Hapus";
    
    // Styling singkat agar tombol hapus terlihat terpisah
    deleteButton.style.marginLeft = "10px";

    // 4. Tambahkan event listener untuk tombol hapus
    deleteButton.addEventListener("click", function() {
        ul.removeChild(li);
    });

    // 5. Rakit elemen: masukkan tombol ke li, masukkan li ke ul
    li.appendChild(deleteButton);
    ul.appendChild(li);

    // 6. Kosongkan input kembali
    input.value = "";
    input.focus(); // Fokuskan kembali kursor ke input
});