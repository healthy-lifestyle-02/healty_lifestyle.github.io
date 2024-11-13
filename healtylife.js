// Menambahkan event listener untuk interaksi dengan tombol atau elemen tertentu di halaman
document.addEventListener('DOMContentLoaded', () => {
    console.log('Halaman Gaya Hidup Sehat dimuat!');
    
    // Efek Parallax pada gambar hero
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        hero.style.backgroundPosition = `center ${offset * 0.5}px`; // Efek parallax
    });

    // Memberikan efek saat elemen fitur di-scroll
    const features = document.querySelectorAll('.feature');
    window.addEventListener('scroll', () => {
        features.forEach(feature => {
            const position = feature.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                feature.classList.add('active');
            }
        });
    });
});
