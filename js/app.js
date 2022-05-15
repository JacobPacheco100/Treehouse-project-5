
// Img Overlay

baguetteBox.run('.gallery');

// SearchBar

function search() {
    const input = document.getElementById('searchbar').value.toLowerCase();
    const gallery = document.querySelectorAll('.img');

    for (let i = 0; i < gallery.length ; i++) {
        const caption = gallery[i].getAttribute('data-caption');

        if (caption.indexOf(input) > -1) {
            gallery[i].style.display = '';
        } else {
            gallery[i].style.display = 'none';
        }
    }
}