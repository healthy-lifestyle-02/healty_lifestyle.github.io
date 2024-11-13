// Fungsi untuk menampilkan atau menyembunyikan detail dari setiap tip pola hidup sehat
function toggleDetail(element) {
    const detail = element.querySelector('.detail');
    
    // Menampilkan atau menyembunyikan paragraf detail
    if (detail.classList.contains('show')) {
        detail.classList.remove('show');
    } else {
        // Menutup semua detail lain sebelum membuka yang baru
        document.querySelectorAll('.detail').forEach((d) => d.classList.remove('show'));
        detail.classList.add('show');
    }
}
