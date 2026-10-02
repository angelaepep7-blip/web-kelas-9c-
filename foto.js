"use strict";

/* =========================================================
   FOTO PROFIL BULAT + ANIMASI BERGERAK  (foto.js)
   Cara pakai: taruh file ini satu folder dengan index.html,
   lalu pasang di index.html:  <script src="foto.js"></script>
   ========================================================= */

/* ▼▼ GANTI LINK FOTO DI SINI (satu-satunya tempat mengubah foto) ▼▼ */
const FOTO_PROFIL = "https://cdn.phototourl.com/member/2026-09-29-3522532c-aa21-4af8-8929-5aeae833eadf.jpg";
/* ▲▲ ▲▲*/

(function () {

    /* ---------- CSS ---------- */
    const css = `
/* Wadah: melayang halus naik-turun + cahaya berdenyut */
.hero-avatar{
    position:relative;display:block;width:132px;height:132px;margin:0 auto 34px;border-radius:50%;
    will-change:transform;
    animation:
        avatarFloat 4.8s cubic-bezier(.45,0,.55,1) infinite,
        avatarGlow 2.4s ease-in-out infinite;
}

/* Bayangan tanah ala Mario, mengecil saat foto naik */
.hero-avatar::after{
    content:"";position:absolute;left:50%;bottom:-20px;width:80%;height:12px;
    background:radial-gradient(ellipse at center,rgba(0,0,0,.55),transparent 70%);
    transform:translateX(-50%);
    animation:avatarShadow 4.8s cubic-bezier(.45,0,.55,1) infinite;
    pointer-events:none;
}

/* Bingkai: lompatan kecil ala Mario (squash & stretch) tiap beberapa detik */
.avatar-frame{
    width:100%;height:100%;border-radius:50%;overflow:hidden;
    border:4px solid #ffd83d;background:#18233c;
    transform-origin:50% 100%;will-change:transform;
    animation:avatarJump 6s cubic-bezier(.33,.9,.4,1) infinite;
}

/* Fotonya sendiri bergeser dan zoom pelan seperti hidup */
.avatar-frame img{
    width:100%;height:100%;object-fit:cover;object-position:center;display:block;
    will-change:transform;
    animation:avatarPan 9s cubic-bezier(.45,0,.55,1) infinite alternate;
}

@keyframes avatarFloat{
    0%,100%{transform:translateY(0) rotate(-1.5deg)}
    50%{transform:translateY(-14px) rotate(1.5deg)}
}
@keyframes avatarShadow{
    0%,100%{transform:translateX(-50%) translateY(0) scaleX(1);opacity:.9}
    50%{transform:translateX(-50%) translateY(14px) scaleX(.72);opacity:.45}
}
@keyframes avatarJump{
    0%,62%,100%{transform:translateY(0) scale(1,1)}
    68%{transform:translateY(0) scale(1.05,.94)}
    77%{transform:translateY(-22px) scale(.96,1.07)}
    86%{transform:translateY(0) scale(1.06,.93)}
    93%{transform:translateY(-3px) scale(.99,1.02)}
}
@keyframes avatarPan{
    0%{transform:scale(1.08) translate(-2%,1%)}
    100%{transform:scale(1.2) translate(2.5%,-2%)}
}
@keyframes avatarGlow{
    0%,100%{box-shadow:0 0 14px 2px rgba(255,216,61,.35),0 0 34px 6px rgba(255,91,79,.15)}
    50%{box-shadow:0 0 24px 6px rgba(255,216,61,.8),0 0 58px 14px rgba(255,91,79,.35)}
}

/* Bintang kelap-kelip */
.hero-avatar .sp{
    position:absolute;line-height:1;color:#fff6c2;
    text-shadow:0 0 8px #ffd83d,0 0 16px #ffd83d;
    opacity:0;pointer-events:none;
    animation:twinkle 2.2s cubic-bezier(.45,0,.55,1) infinite;
}
.sp1{top:-8px;right:4px;font-size:20px}
.sp2{bottom:10px;left:-16px;font-size:15px;animation-delay:.7s}
.sp3{top:20px;left:-20px;font-size:12px;animation-delay:1.3s}
.sp4{bottom:-6px;right:-8px;font-size:17px;animation-delay:.35s}
.sp5{top:-4px;left:14px;font-size:11px;animation-delay:1.7s}
@keyframes twinkle{
    0%,100%{opacity:0;transform:scale(.3) rotate(0)}
    50%{opacity:1;transform:scale(1.2) rotate(35deg)}
}

@media (prefers-reduced-motion:reduce){
    .hero-avatar,.hero-avatar::after,.avatar-frame,.avatar-frame img,.hero-avatar .sp{animation:none}
    .hero-avatar .sp{opacity:.8}
}`;

    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    /* ---------- HTML (dipasang otomatis di atas teks CLASS 9C) ---------- */
    const hero = document.querySelector(".hero-content");
    if (!hero) return;

    const box = document.createElement("div");
    box.className = "hero-avatar";
    box.innerHTML =
        '<div class="avatar-frame"><img id="heroPhoto" alt="Foto profil"></div>' +
        '<span class="sp sp1">✦</span><span class="sp sp2">✦</span><span class="sp sp3">✦</span>' +
        '<span class="sp sp4">✦</span><span class="sp sp5">✦</span>';
    hero.insertBefore(box, hero.firstChild);

    box.querySelector("#heroPhoto").src = FOTO_PROFIL;

})();
