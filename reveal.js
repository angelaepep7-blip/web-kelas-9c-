/* Transisi masuk: layar membuka bulat dari titik blok "?" di halaman login.
   Taruh <script src="reveal.js"></script> tepat setelah <head> di index.html. */
(function () {
    "use strict";

    var m = /^#enter-([\d.]+)-([\d.]+)$/.exec(location.hash);
    if (!m) return; // dibuka langsung tanpa lewat login: tidak ada efek

    try {
        history.replaceState(null, "", location.pathname + location.search);
    } catch (e) {}

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var root = document.documentElement;
    var x = parseFloat(m[1]) * window.innerWidth;
    var y = parseFloat(m[2]) * window.innerHeight;

    // mulai dari layar tertutup penuh, sama seperti akhir animasi login
    var iris = document.createElement("div");
    iris.style.cssText =
        "position:fixed;z-index:2147483647;border-radius:50%;pointer-events:none;" +
        "width:0;height:0;left:" + x + "px;top:" + y + "px;" +
        "transform:translate(-50%,-50%);box-shadow:0 0 0 200vmax #05080f;";
    root.appendChild(iris);
    root.style.overflow = "hidden";

    var started = false;

    function finish() {
        iris.remove();
        root.style.overflow = "";
    }

    function start() {
        if (started) return;
        started = true;

        if (reduce) { finish(); return; }

        // ulangi animasi judul supaya terlihat saat layar membuka
        var hero = document.querySelector(".hero-content");
        if (hero) {
            hero.style.animation = "none";
            void hero.offsetWidth;
            hero.style.animation = "";
        }

        var size = Math.ceil(Math.hypot(window.innerWidth, window.innerHeight) * 2.1);

        var anim = iris.animate(
            [
                { width: "0px", height: "0px" },
                { width: size + "px", height: size + "px" }
            ],
            { duration: 950, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" }
        );
        anim.onfinish = finish;
    }

    var hold = new Promise(function (r) { setTimeout(r, 220); });
    var loaded = new Promise(function (r) {
        if (document.readyState === "complete") r();
        else window.addEventListener("load", r);
    });
    var fonts = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();

    Promise.all([hold, loaded, fonts]).then(start);
    setTimeout(start, 2000); // jaga-jaga kalau ada gambar yang lambat
})();
