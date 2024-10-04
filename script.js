// Funktion, um eine Benachrichtigung anzuzeigen, wenn auf einen Link geklickt wird
document.addEventListener('DOMContentLoaded', function() {
    // Holen aller Links im Abschnitt "links"
    const links = document.querySelectorAll('#links a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Verhindert, dass der Link sofort die Seite lädt
            alert(`Du hast den Link "${link.textContent}" angeklickt.`);
            window.open(link.href, '_blank'); // Öffnet den Link in einem neuen Tab
        });
    });
});