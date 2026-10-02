"use strict";

/* =========================
   DATA MURID
   ========================= */
// @ts-nocheck
const students = [

    {
        id: 1,
        name: "Rivan",
        hobby: "Coding dan gaming",
        bio: "Pria sigma",
        photo: "https://cdn.phototourl.com/member/2026-09-23-599597d1-cd64-4c10-a27e-80ba58b8255a.jpg",
        music: {
            name: "lost soul",
            file: "vin3.mp3"
        }
    },

    {
        id: 2,
        name: "Faisal",
        hobby: "mancing",
        bio: "Born to be different",
        photo: "https://cdn.phototourl.com/member/2026-09-24-30cc653f-9d03-4f52-95c3-9e75c5844967.jpg",
        music: {
            name: "Fake Plastic Trees",
            file: "faisal.mp3"
        }
    },

    {
        id: 3,
        name: "Quenna",
        hobby: "hoby hal positif",
        bio: "inpokan emel",
        photo: "https://cdn.phototourl.com/member/2026-09-23-946eca70-caed-462c-8e60-988be48591e9.jpg",
        music: {
            name: "i want you back-jackson 5",
            file: "quen.mp3"
        }
    },

    {
        id: 4,
        name: "Nadya",
        hobby: "editing dan make'up",
        bio: "hi haters (nada mengejek)",
        photo: "https://cdn.phototourl.com/member/2026-09-24-2d693ead-9253-403b-82b9-467f009bb177.jpg",
        music: {
            name: "treat you better",
            file: "nadya.mp3"
        }
    },

    {
        id: 5,
        name: "Tanisa",
        hobby: "Menggambar atau melukis",
        bio: "Isi bio",
        photo: "https://cdn.phototourl.com/member/2026-09-23-704114de-e817-44f6-8649-eb6cbcc7b865.jpg",
        music: {
            name: "swim",
            file: "tanisa.mp3"
        }
    },

    {
        id: 6,
        name: "Virly",
        hobby: "silat",
        bio: "no need to find aout about me ",
        photo: "https://cdn.phototourl.com/member/2026-09-23-bb1c9573-1179-4d7b-a318-18e7e6494b50.jpg",
        music: {
            name: "reggae",
            file: "virly.mp3"
        }
    },

    {
        id: 7,
        name: "Bagas",
        hobby: "ngoprek motor",
        bio: "inpo body motor mulus",
        photo: "https://cdn.phototourl.com/member/2026-09-23-065f0724-5dc3-4c0f-9ad7-52927a9abafd.jpg",
        music: {
            name: "jendela kelas 1 by iwan fals",
            file: "bagas.mp3"
        }
    },

    {
        id: 8,
        name: "Dinda",
        hobby: "tiktokan",
        bio: "inpo collab",
        photo: "https://cdn.phototourl.com/member/2026-09-23-f3433ac9-d051-4641-b8c8-1d842455d345.jpg",
        music: {
            name: "past life",
            file: "dinda.mp3"
        }
    },

    {
        id: 9,
        name: "Fadlan",
        hobby: "badminton",
        bio: "berasa paling di atas, yang lo anggep maksimal aja masih gw anggap minimal 🫣✌️",
        photo: "https://cdn.phototourl.com/member/2026-09-23-f72e61b5-c1f0-4401-81dd-3dbf9fd324c8.jpg",
        music: {
            name: "terus melaju",
            file: "fadlan.mp3"
        }
    },

    {
        id: 10,
        name: "Siti Samsiah",
        hobby: "volly dan menari",
        bio: "lo sibuk nyari perhatian, gue sibuk bangun masa depan",
        photo: "https://cdn.phototourl.com/member/2026-09-23-f9135862-8df9-43a7-ba3b-e51ca1acac9a.jpg",
        music: {
            name: "lesung pipi (Raim laode)",
            file: "isam.mp3"
        }
    },

    {
        id: 11,
        name: "Meysi",
        hobby: "menari",
        bio: "Isi bio",
        photo: "https://c.termai.cc/i198/w6auQ.jpg",
        music: {
            name: "usik (feby putri)",
            file: "meysi.mp3"
        }
    },

    {
        id: 12,
        name: "Sinta",
        hobby: "make up",
        bio: "enjoy life",
        photo: "https://cdn.phototourl.com/member/2026-09-24-dd3d1f83-e68e-42c3-aded-16eb090f65dd.jpg",
        music: {
            name: "virus by slank",
            file: "sinta.mp3"
        }
    }
];

/* =========================
   DATA MURID 13 - 24
   ========================= */

students.push(

    {
        id: 13,
        name: "Farhan",
        hobby: "balap liar",
        bio: "apa aja well",
        photo: "https://cdn.phototourl.com/member/2026-09-24-67b755a8-0962-4e0a-b397-d106780ba33d.jpg",
        music: {
            name: "restart hati - slank",
            file: "farhan.mp3"
        }
    },

    {
        id: 14,
        name: "Anisa",
        hobby: "makeup",
        bio: "aku ya aku kamu ya kamu, jangan samain aku sama modelan kayak kamu",
        photo: "https://cdn.phototourl.com/member/2026-09-24-880ae384-0511-4579-a815-8c9f7ba3c33b.jpg",
        music: {
            name: "Iris ( the goo goo dolls )",
            file: "anisa.mp3"
        }
    },

    {
        id: 15,
        name: "Riyan",
        hobby: "bermain gitar",
        bio: "Isi bio",
        photo: "https://cdn.phototourl.com/member/2026-09-24-d0294cc6-dc53-4379-b07d-cfa692e9c5d3.jpg",
        music: {
            name: "𝗕𝗼𝗻𝗱𝗮𝗻 𝗽𝗲𝗿𝗸𝗼𝘀𝗼 𝘆𝗮𝘀𝘂𝗱𝗮𝗵𝗹𝗮𝗵",
            file: "riyan.mp3"
        }
    },

    {
        id: 16,
        name: "Ahyar",
        hobby: "hobi gua nyari hobi",
        bio: "no bio lol",
        photo: "https://cdn.phototourl.com/member/2026-09-24-f2b2f952-4f5b-4d46-9ee4-e5930138e2fb.jpg",
        music: {
            name: "blank space - taylor swift",
            file: "ahyar.mp3"
        }
    },

    {
        id: 17,
        name: "Nurul",
        hobby: "badminton",
        bio: "in my own era",
        photo: "https://cdn.phototourl.com/member/2026-09-24-21cf74db-6458-47da-b17f-1f1f32afc862.jpg",
        music: {
            name: "what was i made - Billie Ellish",
            file: "nurul.mp3"
        }
    },

    {
        id: 18,
        name: "Rijwan",
        hobby: "mancing",
        bio: "Isi bio",
        photo: "https://cdn.phototourl.com/member/2026-09-25-60bf6052-476f-4d94-946a-a66c7dac7a8a.jpg",
        music: {
            name: "not you - alan walker",
            file: "rijwan.mp3"
        }
    },

    {
        id: 19,
        name: "Abi Afadli",
        hobby: "main game",
        bio: "saya suka belajar hal baru",
        photo: "https://cdn.phototourl.com/member/2026-09-25-a924e827-59ca-4664-b685-ee6fc7a9eb70.jpg",
        music: {
            name: "mojang priangan",
            file: "abi.mp3"
        }
    },

    {
        id: 20,
        name: "Siti Ainun",
        hobby: "sesuai mood",
        bio: "being alone never scared me",
        photo: "https://cdn.phototourl.com/member/2026-09-26-4a91f108-faba-4c1b-b0d0-766b7b96d244.jpg",
        music: {
            name: "dunia yg nanti by raim laode",
            file: "ainun.mp3"
        }
    },

    {
        id: 21,
        name: "Rezki",
        hobby: "gaming",
        bio: "ngeredupin",
        photo: "https://cdn.phototourl.com/member/2026-09-27-08537fac-0a60-4b1a-96b6-3b74a5b97698.jpg",
        music: {
            name: "no suprise",
            file: "rezki.mp3"
        }
    },

    {
        id: 22,
        name: "Zeva",
        hobby: "badminton",
        bio: "pacar nya azka",
        photo: "https://cdn.phototourl.com/member/2026-09-27-a599950b-bc61-44e8-9c54-685c1955f7de.jpg",
        music: {
            name: "seventeen - Ima Even if the world ends tomorrow",
            file: "jepa.mp3"
        }
    },

    {
        id: 23,
        name: "Felisa",
        hobby: "cook",
        bio: "Isi bio",
        photo: "https://cdn.phototourl.com/member/2026-09-27-8e8d8949-513e-4796-a2b7-9c04f430644f.jpg",
        music: {
            name: "who knows",
            file: "felisa.mp3"
        }
    },

    {
        id: 24,
        name: "Anggi",
        hobby: "mencari suasana baru",
        bio: "learning, playing, growing🌱",
        photo: "https://cdn.phototourl.com/member/2026-09-27-87e965ed-5495-4d6b-87b3-dd32e1a93dbd.jpg",
        music: {
            name: "somebody pleasure",
            file: "anggi.mp3"
        }
    }


);


/* =========================
   ELEMENT HTML
   ========================= */

const studentsGrid =
    document.getElementById(
        "studentsGrid"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );


/* =========================
   FOTO DEFAULT
   ========================= */

function getDefaultPhoto(student) {

    const name =
        encodeURIComponent(
            student.name
        );

    return (
        "https://ui-avatars.com/api/" +
        "?name=" + name +
        "&background=18233c" +
        "&color=ffd83d" +
        "&size=600" +
        "&bold=true"
    );
}


/* =========================
   ESCAPE HTML
   ========================= */

function escapeHTML(text) {

    return String(
        text || ""
    )
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================
   TAMPILKAN MURID
   ========================= */

function renderStudents(
    list = students
) {

    if (!studentsGrid) {
        return;
    }

    studentsGrid.innerHTML = "";


    if (list.length === 0) {

        studentsGrid.innerHTML = `
            <div class="empty">
                 lu nyari siapa jir.
            </div>
        `;

        return;
    }


    list.forEach(
        function(student) {

            const index =
                students.findIndex(
                    function(item) {
                        return (
                            item.id ===
                            student.id
                        );
                    }
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "student-card";


            card.dataset.index =
                index;

            if (
                student.id === 13 ||
                student.id === 14
            ) {
                card.dataset.coupleId =
                    student.id;
            }


            card.innerHTML = `

                <img
                    class="student-photo"
                    src="${
                        student.photo ||
                        getDefaultPhoto(
                            student
                        )
                    }"
                    alt="${
                        escapeHTML(
                            student.name
                        )
                    }"
                >

                <div class="student-info">

                    <div class="number">
                        #${
                            String(
                                student.id
                            ).padStart(
                                2,
                                "0"
                            )
                        }
                    </div>

                    <h3>
                        ${
                            escapeHTML(
                                student.name
                            )
                        }
                    </h3>

                    <p>
                        ${
                            escapeHTML(
                                student.hobby
                            )
                        }
                    </p>

                    <div class="student-tags">

                        <span class="tag">
                            🎵 ${
                                escapeHTML(
                                    student.music.name
                                )
                            }
                        </span>

                        <span class="tag">
                            👆 Klik profil
                        </span>

                    </div>

                </div>
            `;


            studentsGrid.appendChild(
                card
            );

        }
    );

    studentsGrid.appendChild(
        coupleHeartEl
    );

    requestAnimationFrame(
        updateCoupleHeartPosition
    );

}

/* =========================
   HATI BERDETAK #13 & #14
   ========================= */

const coupleHeartEl =
    document.createElement(
        "div"
    );

coupleHeartEl.className =
    "couple-heart";

coupleHeartEl.innerHTML = `
    <svg viewBox="0 0 32 29" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 28.6c-.5 0-1-.2-1.4-.5C8.8 23.6 4.7 20 2.4 16.6.9 14.4 0 12.1 0 9.6 0 4.3 4.1 0 9.1 0c2.7 0 5.2 1.3 6.9 3.5C17.7 1.3 20.2 0 22.9 0 27.9 0 32 4.3 32 9.6c0 2.5-.9 4.8-2.4 7-2.3 3.4-6.4 7-12.2 12.5-.4.3-.9.5-1.4.5z"/>
    </svg>
`;

function updateCoupleHeartPosition() {

    if (!studentsGrid) {
        return;
    }

    const cardA =
        studentsGrid.querySelector(
            '[data-couple-id="13"]'
        );

    const cardB =
        studentsGrid.querySelector(
            '[data-couple-id="14"]'
        );

    if (!cardA || !cardB) {
        coupleHeartEl.style.display =
            "none";
        return;
    }

    const gridRect =
        studentsGrid.getBoundingClientRect();

    const rectA =
        cardA.getBoundingClientRect();

    const rectB =
        cardB.getBoundingClientRect();

    const sameRow =
        Math.abs(
            rectA.top - rectB.top
        ) < 10;

    let x;
    let y;

    if (sameRow) {

        x =
            (
                (rectA.right + rectB.left) / 2
            ) - gridRect.left;

        y =
            (
                (rectA.top + rectA.bottom) / 2
            ) - gridRect.top;

    } else {

        x =
            (
                (rectA.left + rectA.right) / 2
            ) - gridRect.left;

        y =
            (
                (rectA.bottom + rectB.top) / 2
            ) - gridRect.top;

    }

    coupleHeartEl.style.display =
        "flex";

    coupleHeartEl.style.left =
        x + "px";

    coupleHeartEl.style.top =
        y + "px";

}

window.addEventListener(
    "resize",
    function() {
        requestAnimationFrame(
            updateCoupleHeartPosition
        );
    }
);


/* =========================
   KLIK PROFIL
   ========================= */

if (studentsGrid) {

    studentsGrid.addEventListener(
        "click",
        function(event) {

            const card =
                event.target.closest(
                    ".student-card"
                );


            if (!card) {
                return;
            }


            const index =
                Number(
                    card.dataset.index
                );


            if (
                Number.isNaN(index) ||
                !students[index]
            ) {
                return;
            }


            openProfile(index);

        }
    );

}


/* =========================
   SEARCH
   ========================= */

function searchStudents() {

    if (!searchInput) {
        return;
    }


    const keyword =
        searchInput.value
            .toLowerCase()
            .trim();


    const filtered =
        students.filter(
            function(student) {

                return (

                    student.name
                        .toLowerCase()
                        .includes(
                            keyword
                        )

                    ||

                    student.hobby
                        .toLowerCase()
                        .includes(
                            keyword
                        )

                    ||

                    student.music.name
                        .toLowerCase()
                        .includes(
                            keyword
                        )

                );

            }
        );


    renderStudents(
        filtered
    );

}

/* =========================
   DATA MURID 25 - 36
   ========================= */

students.push(

    {
        id: 25,
        name: "Fadli",
        hobby: "futsal",
        bio: "cowok cakep sejagat raya pacarnya juwita",
        photo: "https://cdn.phototourl.com/member/2026-09-27-a3a4b15b-5f20-40f3-a9d4-f1a1f93a4c9c.jpg",
        music: {
            name: "esok by alkateri",
            file: "fadli.mp3"
        }
    },

    {
        id: 26,
        name: "Juwita",
        hobby: "sesuai mood",
        bio: "cewek cakep sejagat raya pacar fadli",
        photo: "https://cdn.phototourl.com/member/2026-09-27-ffcbf193-48bb-415f-a021-6a7d52d9b4a8.jpg",
        music: {
            name: "hink I like you better when you're gone by Renee Rapp",
            file: "juwita.mp3"
        }
    },

    {
        id: 27,
        name: "",
        hobby: "",
        bio: "",
        photo: "",
        music: {
            name: "",
            file: ".mp3"
        }
    },

    {
        id: 28,
        name: "Murid 28",
        hobby: "Isi hobi",
        bio: "Isi bio",
        photo: "URL_FOTO_MURID_28",
        music: {
            name: "Lagu Favorit",
            file: "music/murid-28.mp3"
        }
    },

    {
        id: 29,
        name: "Murid 29",
        hobby: "Isi hobi",
        bio: "Isi bio",
        photo: "URL_FOTO_MURID_29",
        music: {
            name: "Lagu Favorit",
            file: "music/murid-29.mp3"
        }
    },

    {
        id: 30,
        name: "Murid 30",
        hobby: "Isi hobi",
        bio: "Isi bio",
        photo: "URL_FOTO_MURID_30",
        music: {
            name: "Lagu Favorit",
            file: "music/murid-30.mp3"
        }
    },

    {
        id: 31,
        name: "Murid 31",
        hobby: "Isi hobi",
        bio: "Isi bio",
        photo: "URL_FOTO_MURID_31",
        music: {
            name: "Lagu Favorit",
            file: "music/murid-31.mp3"
        }
    },

    {
        id: 32,
        name: "Murid 32",
        hobby: "Isi hobi",
        bio: "Isi bio",
        photo: "URL_FOTO_MURID_32",
        music: {
            name: "Lagu Favorit",
            file: "music/murid-32.mp3"
        }
    },

    {
        id: 33,
        name: "Murid 33",
        hobby: "Isi hobi",
        bio: "Isi bio",
        photo: "URL_FOTO_MURID_33",
        music: {
            name: "Lagu Favorit",
            file: "music/murid-33.mp3"
        }
    },

    {
        id: 34,
        name: "Murid 34",
        hobby: "Isi hobi",
        bio: "Isi bio",
        photo: "URL_FOTO_MURID_34",
        music: {
            name: "Lagu Favorit",
            file: "music/murid-34.mp3"
        }
    },

    {
        id: 35,
        name: "Murid 35",
        hobby: "Isi hobi",
        bio: "Isi bio",
        photo: "URL_FOTO_MURID_35",
        music: {
            name: "Lagu Favorit",
            file: "music/murid-35.mp3"
        }
    },

);


/* =========================
   PROFILE MODAL
   ========================= */

function createProfileModal() {

    let overlay =
        document.getElementById(
            "profileOverlay"
        );

    if (overlay) {
        return overlay;
    }


    overlay =
        document.createElement(
            "div"
        );

    overlay.id =
        "profileOverlay";

    overlay.className =
        "profile-overlay";


    overlay.innerHTML = `

        <div class="profile-box">

            <div class="profile-cover">

                <button
                    class="profile-close"
                    id="profileClose"
                    type="button">
                    ×
                </button>

            </div>


            <div class="profile-main">

                <img
                    id="profilePhoto"
                    class="profile-avatar"
                    src=""
                    alt="Foto murid"
                >


                <div
                    class="profile-name"
                    id="profileName">
                    Nama Murid
                </div>


                <div
                    class="profile-role"
                    id="profileRole">
                    Murid Class 9C
                </div>


                <div class="profile-grid">

                    <div class="profile-item">

                        <span>
                            🎵 MUSIK FAVORIT
                        </span>

                        <strong
                            id="profileMusic">
                            Belum ada
                        </strong>

                    </div>


                    <div class="profile-item">

                        <span>
                            🎮 HOBI
                        </span>

                        <strong
                            id="profileHobby">
                            Belum diisi
                        </strong>

                 </div>

                </div>


                <div class="bio">

                    <b>
                        📝 BIO
                    </b>

                    <br><br>

                    <span id="profileBio">
                        Belum ada bio.
                    </span>

                </div>


                <div
                    id="profileMusicPlayer"
                    class="music-player">
                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    document
        .getElementById(
            "profileClose"
        )
        .addEventListener(
            "click",
            closeProfile
        );


    overlay.addEventListener(
        "click",
        function(event) {

            if (
                event.target === overlay
            ) {

                closeProfile();

            }

        }
    );


    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Escape"
            ) {

                closeProfile();

            }

        }
    );


    addMusicPlayerStyle();


    return overlay;
}


/* =========================
   STYLE MUSIC PLAYER
   ========================= */

function addMusicPlayerStyle() {

    if (
        document.getElementById(
            "musicPlayerStyle"
        )
    ) {
        return;
    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "musicPlayerStyle";


    style.textContent = `

        .music-player {

            margin-top:25px;

            padding:20px;

            border-radius:20px;

            background:
                linear-gradient(
                    135deg,
                    rgba(255,216,61,.10),
                    rgba(49,87,213,.12)
                );

            border:
                1px solid
                rgba(255,255,255,.08);

        }


        .music-player-title {

            font-size:19px;

            font-weight:700;

            margin-bottom:14px;

        }


        .music-song {

            padding:15px;

            border-radius:15px;

            background:
                rgba(255,255,255,.06);

            border:
                1px solid
                rgba(255,255,255,.08);

        }


        .music-song-name {

            font-weight:700;

            color:white;

            margin-bottom:10px;

            word-break:break-word;

        }


        .music-song audio {

            width:100%;

            height:42px;

        }

    `;


    document.head.appendChild(
        style
    );

}


/* =========================
   BUKA PROFIL
   ========================= */

function openProfile(index) {

    const student =
        students[index];


    if (!student) {
        return;
    }


    const overlay =
        createProfileModal();


    document.getElementById(
        "profilePhoto"
    ).src =
        student.photo ||
        getDefaultPhoto(student);


    document.getElementById(
        "profilePhoto"
    ).alt =
        student.name;


    document.getElementById(
        "profileName"
    ).textContent =
        student.name;


    document.getElementById(
        "profileRole"
    ).textContent =
        "Murid Class 9C • #" +
        String(
            student.id
        ).padStart(
            2,
            "0"
        );


    document.getElementById(
        "profileHobby"
    ).textContent =
        student.hobby;


    document.getElementById(
        "profileBio"
    ).textContent =
        student.bio;


    document.getElementById(
        "profileMusic"
    ).textContent =
        student.music.name;


    renderMusicPlayer(
        student
    );


    overlay.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================
   PEMUTAR LAGU
   ========================= */

function renderMusicPlayer(
    student
) {

    const player =
        document.getElementById(
            "profileMusicPlayer"
        );


    if (!player) {
        return;
    }


    player.innerHTML = `

        <div class="music-player-title">

            🎧 Putar Lagu Favorit

        </div>


        <div class="music-song">

            <div class="music-song-name">

                🎵 ${
                    escapeHTML(
                        student.music.name
                    )
                }

            </div>


            <audio
                controls
                preload="metadata">

                <source
                    src="${
                        escapeHTML(
                            student.music.file
                        )
                    }"
                    type="audio/mpeg">

                Browser kamu tidak
                mendukung pemutar audio.

            </audio>

        </div>

    `;

}


/* =========================
   TUTUP PROFIL
   ========================= */

function closeProfile() {

    const overlay =
        document.getElementById(
            "profileOverlay"
        );


    if (!overlay) {
        return;
    }


    overlay.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


/* =========================
   NAVIGASI
   ========================= */

function goTo(id) {

    const element =
        document.getElementById(
            id
        );


    if (!element) {
        return;
    }


    element.scrollIntoView({

        behavior:
            "smooth",

        block:
            "start"

    });

}


/* =========================
   TOMBOL KE ATAS
   ========================= */

function setupTopButton() {

    let button =
        document.getElementById(
            "topButton"
        );


    if (!button) {

        button =
            document.createElement(
                "button"
            );

        button.id =
            "topButton";

        button.className =
            "top-btn";

        button.textContent =
            "↑";

        document.body.appendChild(
            button
        );

    }


    window.addEventListener(
        "scroll",
        function() {

            if (
                window.scrollY > 500
            ) {

                button.classList.add(
                    "show"
                );

            } else {

                button.classList.remove(
                    "show"
                );

            }

        }
    );


    button.addEventListener(
        "click",
        function() {

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }
    );

}


/* =========================
   BACKGROUND MUSIC
   ========================= */

function setupMusic() {

    const music =
        document.getElementById(
            "bgMusic"
        );


    const button =
        document.getElementById(
            "musicButton"
        );


    if (
        !music ||
        !button
    ) {

        return;

    }


    button.addEventListener(
        "click",
        function() {

            if (
                music.paused
            ) {

                music.play()

                    .then(
                        function() {

                            button.textContent =
                                "🔊";

                        }
                    )

                    .catch(
                        function() {

                            alert(
                                "Tekan tombol musik lagi."
                            );

                        }
                    );

            } else {

                music.pause();

                button.textContent =
                    "🔇";

            }

        }
    );

}


/* =========================
   MULAI WEBSITE
   ========================= */

function init() {


    createProfileModal();
  
    renderStudents();

    setupTopButton();

    setupMusic();

    console.log(
        "🍄 Class 9C berhasil dijalankan!"
    );

}


/* =========================
   JALANKAN
   ========================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

} else {

    init();

}
