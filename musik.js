const music = document.getElementById("bgMusic");

if (music) {
    music.loop = true;
    music.volume = 0.6;

    document.addEventListener("click", () => {
        if (music.paused) {
            music.play().catch(() => {});
        }
    }, { once: true });
}