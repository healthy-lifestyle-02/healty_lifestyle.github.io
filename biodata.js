document.addEventListener('DOMContentLoaded', () => {
    // Menambahkan efek scroll untuk animasi fade-in
    const biodataCards = document.querySelectorAll('.biodata-card');

    function showOnScroll() {
        biodataCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardPosition < windowHeight - 100) {
                card.classList.add('fadeIn');
            }
        });
    }

    // Menjalankan animasi saat scroll
    window.addEventListener('scroll', showOnScroll);
    showOnScroll(); // Memanggil sekali untuk memastikan yang terlihat langsung muncul
});
