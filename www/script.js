let counter = 0;
const counterDisplay = document.getElementById('counter');
const backgroundMusic = document.getElementById('background-music');
const playPauseButton = document.getElementById('play-pause');
const stopButton = document.getElementById('stop');

// Función para actualizar el contador
function updateCounter() {
    counterDisplay.textContent = counter;
}

// Incrementar con clic izquierdo (excepto en los botones)
document.addEventListener('click', (event) => {
    // Verifica si el clic no fue en los botones de música
    if (!event.target.closest('.music-controls')) {
        if (counter < 9999) {
            counter++;
            updateCounter();
        }
    }
});

// Decrementar con clic derecho (excepto en los botones)
document.addEventListener('contextmenu', (event) => {
    // Verifica si el clic no fue en los botones de música
    if (!event.target.closest('.music-controls')) {
        event.preventDefault(); // Evita el menú contextual del clic derecho
        if (counter > 0) {
            counter--;
            updateCounter();
        }
    }
});

// Control de música
playPauseButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que el clic afecte el contador
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseButton.textContent = "⏸ Pause";
    } else {
        backgroundMusic.pause();
        playPauseButton.textContent = "🎵 Play";
    }
});

stopButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que el clic afecte el contador
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reinicia la música
    playPauseButton.textContent = "🎵 Play";
});

// Deshabilitar clic derecho en los botones de música
playPauseButton.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

stopButton.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});