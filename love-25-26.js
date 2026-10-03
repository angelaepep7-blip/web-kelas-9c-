/* =========================================================
   LOVE MURID #25 (Fadli) & #26 (Juwita)
   File ini berdiri sendiri. Pasang di website.html SETELAH sc2.js:
   <script src="love-25-26.js"></script>
   Pasangannya: love-25-26.css
   ========================================================= */
(function () {

    var ID_A = 25;
    var ID_B = 26;

    var grid = document.getElementById('studentsGrid');
    if (!grid) { return; }

    /* ---------- elemen hati ---------- */

    var heart = document.createElement('div');
    heart.className = 'love-heart';
    heart.innerHTML =
        '<svg viewBox="0 0 32 29" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M16 28.6c-.5 0-1-.2-1.4-.5C8.8 23.6 4.7 20 2.4 16.6.9 14.4 0 12.1 0 9.6 0 4.3 4.1 0 9.1 0c2.7 0 5.2 1.3 6.9 3.5C17.7 1.3 20.2 0 22.9 0 27.9 0 32 4.3 32 9.6c0 2.5-.9 4.8-2.4 7-2.3 3.4-6.4 7-12.2 12.5-.4.3-.9.5-1.4.5z"/>' +
        '</svg>';

    /* ---------- cari kartu murid berdasarkan nomor (#25, #26) ---------- */

    function findCard(id) {
        var cards = grid.querySelectorAll('.student-card');
        for (var i = 0; i < cards.length; i++) {
            var num = cards[i].querySelector('.number');
            if (!num) { continue; }
            if (parseInt(num.textContent.replace(/\D/g, ''), 10) === id) {
                return cards[i];
            }
        }
        return null;
    }

    /* ---------- posisi hati ---------- */

    function updatePosition() {

        var a = findCard(ID_A);
        var b = findCard(ID_B);

        /* salah satu tidak tampil (misal hasil pencarian) → sembunyikan hati */
        if (!a || !b) {
            heart.style.display = 'none';
            return;
        }

        /*
           Pakai posisi layout (offsetLeft/offsetTop), bukan getBoundingClientRect,
           supaya posisi hati tidak meleset saat kartu sedang animasi bergeser.
        */
        var sameRow = Math.abs(a.offsetTop - b.offsetTop) < 10;
        var x;
        var y;

        if (sameRow) {
            x = ((a.offsetLeft + a.offsetWidth) + b.offsetLeft) / 2;
            y = a.offsetTop + a.offsetHeight / 2;
        } else {
            x = a.offsetLeft + a.offsetWidth / 2;
            y = ((a.offsetTop + a.offsetHeight) + b.offsetTop) / 2;
        }

        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.display = 'flex';
    }

    /* ---------- pasang & jaga hati tetap ada ---------- */

    function sync() {
        /* render ulang kartu (innerHTML = "") ikut menghapus hati, jadi pasang lagi */
        if (heart.parentNode !== grid) {
            grid.appendChild(heart);
        }
        requestAnimationFrame(updatePosition);
    }

    new MutationObserver(sync).observe(grid, { childList: true });

    window.addEventListener('resize', function () {
        requestAnimationFrame(updatePosition);
    });

    /* font/gambar yang telat dimuat bisa menggeser kartu → hitung ulang */
    window.addEventListener('load', updatePosition);

    if ('ResizeObserver' in window) {
        new ResizeObserver(function () {
            requestAnimationFrame(updatePosition);
        }).observe(grid);
    }

    sync();

})();
