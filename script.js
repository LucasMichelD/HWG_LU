
document.addEventListener('DOMContentLoaded', function() {

    // 1. Dynamische Begrüßung basierend auf der Tageszeit
    const greeting = document.querySelector('header h1');
    const now = new Date();
    const hours = now.getHours();

    if (hours < 12) {
        greeting.textContent = 'Guten Morgen! Willkommen auf der Website: Wichtige Links zur HWG LU';
    } else if (hours < 18) {
        greeting.textContent = 'Guten Tag! Willkommen auf der Website: Wichtige Links zur HWG LU';
    } else {
        greeting.textContent = 'Guten Abend! Willkommen auf der Website: Wichtige Links zur HWG LU';
    }

    // 3. Scroll-to-Section Animation
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 4. Modal für Kontaktinformationen
    const contactLink = document.getElementById('contactLink');
    const modal = document.getElementById('contactModal');
    const closeModal = document.querySelector('.close');

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // 5. Warnung beim Verlassen der Seite
    window.addEventListener('beforeunload', function(event) {
        event.preventDefault();
        event.returnValue = 'Möchten Sie die Seite wirklich verlassen? Nicht gespeicherte Änderungen gehen möglicherweise verloren.';
    });

});
