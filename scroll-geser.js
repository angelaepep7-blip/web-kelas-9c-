/* =========================================================
   SCROLL GESER — animasi bergeser super smooth (seluruh website)
   File ini berdiri sendiri. Pasang di website.html SETELAH sc2.js:
   <script src="scroll-geser.js"></script>
   Pasangannya: scroll-geser.css
   ========================================================= */
(function () {

    var reduce = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
        return;
    }

    var OFFSET = window.innerWidth < 600 ? 60 : 90;   /* jarak geser (px) */
    var DURATION = 1300;                              /* ms, samakan dengan CSS */

    /* ---------- inti ---------- */

    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            /* sudah di atas layar (terlewat) juga langsung ditampilkan; elemen tersembunyi (tinggi 0) diabaikan */
            if (e.isIntersecting || (e.boundingClientRect.height > 0 && e.boundingClientRect.bottom <= 0)) {
                reveal(e.target);
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px -5% 0px' });

    function prep(el, dx, dy, scale, delay) {
        if (!el || el.__sl) { return; }
        el.__sl = true;
        el.classList.add('sl');
        el.style.setProperty('--sx', dx + 'px');
        el.style.setProperty('--sy', dy + 'px');
        el.style.setProperty('--ss', scale);
        el.style.setProperty('--d', delay + 's');
        io.observe(el);
    }

    function reveal(el) {
        if (el.classList.contains('show')) { return; }
        io.unobserve(el);
        el.classList.add('show');

        var d = parseFloat(el.style.getPropertyValue('--d')) || 0;
        setTimeout(function () { finish(el); }, DURATION + d * 1000 + 250);
    }

    /* setelah animasi selesai, kembalikan elemen ke gaya aslinya (hover dll normal lagi) */
    function finish(el) {
        el.classList.remove('sl', 'show');
        el.style.removeProperty('--sx');
        el.style.removeProperty('--sy');
        el.style.removeProperty('--ss');
        el.style.removeProperty('--d');
        if (el.classList.contains('student-card')) {
            el.classList.add('sl-done');
        }
    }

    /* ---------- elemen statis ---------- */

    function setupStatic() {

        /* judul section: label, judul, teks geser bergantian kiri / kanan per section */
        var titles = document.querySelectorAll('.section-title');
        Array.prototype.forEach.call(titles, function (t, si) {
            var dir = (si % 2 === 0) ? -OFFSET : OFFSET;
            Array.prototype.forEach.call(t.children, function (kid, i) {
                prep(kid, dir, 0, 0.96, i * 0.12);
            });
            /* kotak cari murid ada tepat setelah judul */
            var next = t.nextElementSibling;
            if (next && next.classList.contains('search-box')) {
                prep(next, -dir, 0, 0.96, 0.3);
            }
        });

        /* kartu wali kelas & statistik */
        Array.prototype.forEach.call(document.querySelectorAll('.info-card'), function (c, i) {
            prep(c, i % 2 === 0 ? -OFFSET : OFFSET, 0, 0.95, i * 0.15);
        });

        /* 4 foto kelas: kiri-kanan bertemu di tengah */
        Array.prototype.forEach.call(document.querySelectorAll('.class-photo'), function (p, i) {
            prep(p, i % 2 === 0 ? -OFFSET : OFFSET, 0, 0.92, (i % 2) * 0.1);
        });
        prep(document.querySelector('.photo-note'), -OFFSET, 0, 0.98, 0.1);

        /* jadwal pelajaran */
        Array.prototype.forEach.call(document.querySelectorAll('.table-wrap'), function (w) {
            prep(w, OFFSET, 0, 0.97, 0);
        });

        /* bagian paling bawah */
        Array.prototype.forEach.call(
            document.querySelectorAll('.request-section h2, .request-section p'),
            function (el, i) { prep(el, -OFFSET, 0, 0.98, i * 0.1); }
        );
        prep(document.querySelector('.request-buttons'), 0, 40, 0.9, 0.1);
        prep(document.querySelector('.developer'), OFFSET, 0, 0.98, 0.1);
    }

    /* ---------- kartu murid (dibuat lewat JS di sc2.js) ---------- */

    var grid = document.getElementById('studentsGrid');
    var gridDone = false;

    function colsOf(g) {
        var t = window.getComputedStyle(g).gridTemplateColumns;
        return (t && t !== 'none') ? t.split(' ').length : 1;
    }

    function setupGrid() {
        if (!grid || gridDone) { return; }

        var cards = grid.querySelectorAll('.student-card');
        if (!cards.length) { return; }

        /* hanya render pertama yang dianimasikan; render ulang (cari murid) tanpa geser */
        gridDone = true;

        var cols = colsOf(grid);

        Array.prototype.forEach.call(cards, function (card, i) {
            var col = i % cols;
            var dx = 0;
            var dy = 0;

            if (cols % 2 === 1 && col === (cols - 1) / 2) {
                dy = 70;                                        /* kolom tengah naik dari bawah */
            } else {
                dx = col < cols / 2 ? -OFFSET : OFFSET;         /* kiri dari kiri, kanan dari kanan */
            }

            prep(card, dx, dy, 0.92, col * 0.09);
        });
    }

    /* ---------- hati pasangan: muncul saat sampai di layar ---------- */

    var heartIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting || (e.boundingClientRect.height > 0 && e.boundingClientRect.bottom <= 0)) {
                e.target.classList.remove('pending');
                heartIO.unobserve(e.target);
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });

    function setupHearts() {
        if (!grid) { return; }
        Array.prototype.forEach.call(
            grid.querySelectorAll('.couple-heart, .love-heart'),
            function (h) {
                if (h.__heartWatched) { return; }
                h.__heartWatched = true;
                h.classList.add('pending');
                heartIO.observe(h);
            }
        );
    }

    /* ---------- jalankan ---------- */

    setupStatic();
    setupGrid();
    setupHearts();

    if (grid) {
        new MutationObserver(function () {
            setupGrid();
            setupHearts();
        }).observe(grid, { childList: true });
    }

    /* jaga-jaga: kalau sudah mentok di dasar halaman, tampilkan semua yang tersisa */
    window.addEventListener('scroll', function () {
        var atBottom = window.innerHeight + window.pageYOffset >=
            document.documentElement.scrollHeight - 6;
        if (!atBottom) { return; }
        Array.prototype.forEach.call(document.querySelectorAll('.sl:not(.show)'), reveal);
    }, { passive: true });

})();
