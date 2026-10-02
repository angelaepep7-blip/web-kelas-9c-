/* =====================================================
   LOADING SCREEN MARIO — MURNI JAVASCRIPT
   File: loading-mario.js
   Cara pakai: cukup pasang di HTML
   <script src="loading-mario.js"></script>
   (tanpa HTML / CSS tambahan, semua dibuat lewat JS)
   ===================================================== */

(() => {

    "use strict";

    if (window.__MarioLoadingLoaded) return;
    window.__MarioLoadingLoaded = true;


    /* ---------- PENGATURAN ---------- */

    const TEXT = "9c sedang dalam perjalanan";
    const EMOJI = "🚀🚀";
    const MIN_DURATION = 3500;   // minimal lama loading (ms)
    const PIXEL = 4;             // ukuran 1 pixel sprite Mario


    /* ---------- SPRITE MARIO (PIXEL ART) ---------- */

    const PALETTE = {
        R: "#e52521",   // merah (topi, baju)
        B: "#6b3a00",   // coklat (rambut, sepatu)
        S: "#ffc18c",   // kulit
        U: "#2038ec",   // biru (overall)
        Y: "#ffd800",   // kuning (kancing)
        K: "#000000"    // hitam (mata)
    };

    const HEAD_BODY = [
        "....RRRRR...",
        "...RRRRRRRRR",
        "...BBBSSKS..",
        "..BSBSSSBSSS",
        "..BSBBSSSBSS",
        "..BBSSSSBBBB",
        "....SSSSSSS.",
        "...RRURRR...",
        "..RRRURRURRR",
        ".RRRUUUURRR.",
        ".SSRUYUUYRSS",
        ".SSUUUUUUSS.",
        "..UUUUUUUU.."
    ];

    const LEGS_TOGETHER = [
        "...UUUUUU...",
        "...BBBBBB...",
        "..BBBBBBBB.."
    ];

    const LEGS_APART = [
        ".UUUU..UUUU.",
        "BBBB....BBBB",
        "BBB......BBB"
    ];

    function makeSprite(rows) {

        const c = document.createElement("canvas");
        c.width = rows[0].length * PIXEL;
        c.height = rows.length * PIXEL;

        const g = c.getContext("2d");

        rows.forEach((row, y) => {
            [...row].forEach((ch, x) => {
                if (PALETTE[ch]) {
                    g.fillStyle = PALETTE[ch];
                    g.fillRect(x * PIXEL, y * PIXEL, PIXEL, PIXEL);
                }
            });
        });

        return { url: c.toDataURL(), w: c.width, h: c.height };
    }

    const frames = [
        makeSprite([...HEAD_BODY, ...LEGS_TOGETHER]),
        makeSprite([...HEAD_BODY, ...LEGS_APART])
    ];


    /* ---------- CSS (DISUNTIKKAN LEWAT JS) ---------- */

    function injectStyle() {

        const font = document.createElement("link");
        font.rel = "stylesheet";
        font.href =
            "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;700&display=swap";
        document.head.appendChild(font);

        const css = document.createElement("style");

        css.textContent = `

        #marioLoading {
            position: fixed;
            inset: 0;
            z-index: 999999;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            color: #fff;
            font-family: "Fredoka", "Poppins", sans-serif;
            background:
                radial-gradient(circle at 10% 20%, rgba(255,70,70,.18), transparent 25%),
                radial-gradient(circle at 90% 10%, rgba(40,130,255,.18), transparent 25%),
                radial-gradient(circle at 50% 100%, rgba(255,210,50,.12), transparent 30%),
                linear-gradient(135deg, #070b18, #101a35 50%, #080d1c);
            opacity: 1;
            transition: opacity .6s ease;
        }

        #marioLoading::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: .18;
            pointer-events: none;
            background-image:
                linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
            background-size: 45px 45px;
        }

        #marioLoading.mlHide {
            opacity: 0;
            pointer-events: none;
        }

        #marioLoading .mlFloat {
            position: absolute;
            opacity: .15;
            line-height: 1;
            pointer-events: none;
            animation: mlFloat 7s ease-in-out infinite;
        }

        #marioLoading .mlCoin {
            width: 35px;
            height: 45px;
            border: 5px solid #ffd83d;
            border-radius: 50%;
        }

        #marioLoading .mlStar {
            font-size: 55px;
            color: #ffd83d;
        }

        #marioLoading .mlCloud {
            font-size: 65px;
        }

        @keyframes mlFloat {
            0%, 100% { transform: translateY(0) rotate(0); }
            50%      { transform: translateY(-25px) rotate(8deg); }
        }

        #marioLoading .mlTitleWrap {
            position: relative;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 6vw;
        }

        #marioLoading .mlTitle {
            text-align: center;
            font-weight: 700;
            font-size: clamp(30px, 7.5vw, 68px);
            line-height: 1.15;
            letter-spacing: -1px;
            filter: drop-shadow(0 15px 40px rgba(255,70,70,.25));
            animation: mlPulse 1.4s ease-in-out infinite;
        }

        #marioLoading .mlGrad {
            display: inline-block;
            background: linear-gradient(180deg, #fff 15%, #ffd83d 48%, #ff5b4f 90%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        @keyframes mlPulse {
            0%, 100% { transform: scale(1); }
            50%      { transform: scale(1.04); }
        }

        #marioLoading .mlBottom {
            position: relative;
            padding: 0 7vw 22px;
        }

        #marioLoading .mlStage {
            position: relative;
            width: 100%;
            height: ${frames[0].h}px;
        }

        #marioLoading .mlMarioPos {
            position: absolute;
            bottom: 0;
            left: 0;
            width: ${frames[0].w}px;
            height: ${frames[0].h}px;
        }

        #marioLoading .mlMario {
            display: block;
            width: 100%;
            height: 100%;
            image-rendering: pixelated;
        }

        #marioLoading .mlBar {
            width: 100%;
            height: 16px;
            overflow: hidden;
            border-radius: 50px;
            background: rgba(255,255,255,.08);
            border: 1px solid rgba(255,255,255,.12);
        }

        #marioLoading .mlFill {
            width: 0%;
            height: 100%;
            border-radius: 50px;
            background: linear-gradient(135deg, #ef3340, #ff7048);
            box-shadow: 0 0 20px rgba(239,51,64,.5);
        }

        #marioLoading .mlPercent {
            margin-top: 14px;
            text-align: center;
            font-weight: 700;
            font-size: clamp(22px, 5.5vw, 32px);
            color: #ffd83d;
        }

        #marioLoading .mlGround {
            position: relative;
            height: 70px;
            background: linear-gradient(#50b848 0 35%, #925c38 35% 100%);
            border-top: 8px solid #38a53b;
        }
        `;

        document.head.appendChild(css);
    }


    /* ---------- BUAT ELEMEN ---------- */

    function el(tag, className, parent) {
        const e = document.createElement(tag);
        if (className) e.className = className;
        if (parent) parent.appendChild(e);
        return e;
    }

    function start() {

        injectStyle();

        const root = el("div");
        root.id = "marioLoading";

        /* objek melayang (koin, bintang, awan) */
        const floaters = [
            { cls: "mlCoin",  text: "",   pos: "top:15%;left:4%" },
            { cls: "mlStar",  text: "★",  pos: "top:40%;right:5%;animation-delay:1s" },
            { cls: "mlCloud", text: "☁️", pos: "bottom:34%;left:7%;animation-delay:2s" },
            { cls: "mlCoin",  text: "",   pos: "top:24%;right:22%;animation-delay:3s" }
        ];

        floaters.forEach(f => {
            const o = el("div", "mlFloat " + f.cls, root);
            o.textContent = f.text;
            o.style.cssText = f.pos;
        });

        /* teks judul */
        const titleWrap = el("div", "mlTitleWrap", root);
        const title = el("div", "mlTitle", titleWrap);
        const grad = el("span", "mlGrad", title);
        grad.textContent = TEXT;
        title.appendChild(document.createTextNode(" "));
        const rocket = el("span", "mlRocket", title);
        rocket.textContent = EMOJI;

        /* bagian bawah: Mario + bar + persen */
        const bottom = el("div", "mlBottom", root);

        const stage = el("div", "mlStage", bottom);
        const marioPos = el("div", "mlMarioPos", stage);
        const mario = el("img", "mlMario", marioPos);
        mario.alt = "";
        mario.src = frames[0].url;

        const bar = el("div", "mlBar", bottom);
        const fill = el("div", "mlFill", bar);

        const percent = el("div", "mlPercent", bottom);
        percent.textContent = "0%";

        el("div", "mlGround", root);

        document.body.appendChild(root);

        const oldOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";


        /* ---------- ANIMASI JALAN ---------- */

        let frameIndex = 0;

        const walkTimer = setInterval(() => {
            frameIndex = 1 - frameIndex;
            mario.src = frames[frameIndex].url;
            mario.style.transform =
                frameIndex ? "translateY(-3px)" : "translateY(0)";
        }, 140);


        /* ---------- PROGRESS ---------- */

        let progress = 0;
        let pageLoaded = document.readyState === "complete";
        const t0 = performance.now();

        window.addEventListener("load", () => { pageLoaded = true; });

        function finish() {

            clearInterval(walkTimer);
            mario.src = frames[0].url;
            mario.style.transform = "translateY(0)";

            setTimeout(() => {

                root.classList.add("mlHide");
                document.body.style.overflow = oldOverflow;

                setTimeout(() => {
                    root.remove();
                    window.dispatchEvent(new Event("marioLoadingDone"));
                }, 650);

            }, 500);
        }

        function tick(now) {

            const byTime = ((now - t0) / MIN_DURATION) * 100;
            const cap = pageLoaded ? 100 : 90;
            const target = Math.min(byTime, cap);

            progress += (target - progress) * 0.12;
            if (target >= 100 && progress > 99.5) progress = 100;

            const p = Math.min(100, progress);

            fill.style.width = p + "%";
            marioPos.style.left = p + "%";
            marioPos.style.transform = `translateX(-${p}%)`;
            percent.textContent = Math.floor(p) + "%";

            if (p >= 100) {
                finish();
                return;
            }

            requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
    }


    /* ---------- JALANKAN SETELAH BODY SIAP ---------- */

    if (document.body) {
        start();
    } else {
        document.addEventListener("DOMContentLoaded", start, { once: true });
    }

})();
