/* =========================
   HATI BERDETAK #1 & #2
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