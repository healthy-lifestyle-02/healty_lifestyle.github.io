// Menambahkan event listener untuk judul h1
document.querySelector('h1').addEventListener('click', function() {
    alert('Anda mengklik judul halaman!');
});

// Fungsi untuk menampilkan informasi tambahan
function showMoreInfo() {
    // Membuat elemen paragraf baru untuk informasi tambahan
    const info = document.createElement('p');
    info.classList.add('info-text');
    info.innerHTML = "Pola hidup sehat mencakup aktivitas fisik teratur, makan makanan bergizi, tidur yang cukup, serta menjaga keseimbangan mental. Dengan menjalani gaya hidup sehat, kita dapat mencegah banyak penyakit dan menjaga kualitas hidup yang lebih baik.";
    
    // Membuat tombol "Tutup" di bawah informasi tambahan
    const closeButton = document.createElement('button');
    closeButton.textContent = "Tutup";
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', function() {
        info.remove();
        closeButton.remove();
        button.style.display = "inline-block"; // Menampilkan kembali tombol "Pelajari Lebih Lanjut"
    });

    // Menyembunyikan tombol "Pelajari Lebih Lanjut" dan menambahkan elemen ke halaman
    button.style.display = "none";
    document.querySelector('div').appendChild(info);
    document.querySelector('div').appendChild(closeButton);
}

// Membuat tombol untuk menampilkan informasi lebih lanjut
const button = document.createElement('button');
button.textContent = "Pelajari Lebih Lanjut";
button.addEventListener('click', showMoreInfo);

// Menambahkan tombol ke dalam div utama
document.querySelector('div').appendChild(button);
