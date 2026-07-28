/* =========================================
   DURGA PUJA COUNTDOWN 2026
   script.js
========================================= */

// Countdown Target
const pujaDate = new Date("2026-10-16T00:00:00+05:30").getTime();

// Elements
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const pujaMessage = document.getElementById("pujaMessage");
const festivalStatus = document.getElementById("festivalStatus");

const pujaCards = {
    mahalaya: document.getElementById("mahalaya"),
    sasthi: document.getElementById("sasthi"),
    saptami1: document.getElementById("saptami1"),
    saptami2: document.getElementById("saptami2"),
    ashtami: document.getElementById("ashtami"),
    nabami: document.getElementById("nabami"),
    bijoya: document.getElementById("bijoya")
};

// Add leading zero
function formatNumber(number) {
    return String(number).padStart(2, "0");
}

// Highlight current festival card
function highlightCurrentDay() {

    Object.values(pujaCards).forEach(card => {
        card.classList.remove("featured");
    });

    const today = new Date();

    if (today.getFullYear() !== 2026) return;
    if (today.getMonth() !== 9) return; // October

    switch (today.getDate()) {

        case 10:
            pujaCards.mahalaya.classList.add("featured");
            break;

        case 16:
            pujaCards.sasthi.classList.add("featured");
            break;

        case 17:
            pujaCards.saptami1.classList.add("featured");
            break;

        case 18:
            pujaCards.saptami2.classList.add("featured");
            break;

        case 19:
            pujaCards.ashtami.classList.add("featured");
            break;

        case 20:
            pujaCards.nabami.classList.add("featured");
            break;

        case 21:
            pujaCards.bijoya.classList.add("featured");
            break;
    }

}

// Hero subtitle
function updateFestivalStatus() {

    const today = new Date();

    if (today.getFullYear() !== 2026) {

        festivalStatus.textContent = "অপেক্ষার আর মাত্র...";
        return;

    }

    if (today.getMonth() !== 9) {

        festivalStatus.textContent = "অপেক্ষার আর মাত্র...";
        return;

    }

    switch (today.getDate()) {

        case 16:
            festivalStatus.textContent = "🌺 শুভ মহাষষ্ঠী";
            break;

        case 17:
        case 18:
            festivalStatus.textContent = "🌿 শুভ মহাসপ্তমী";
            break;

        case 19:
            festivalStatus.textContent = "🙏 শুভ মহাষ্টমী";
            break;

        case 20:
            festivalStatus.textContent = "✨ শুভ মহানবমী";
            break;

        case 21:
            festivalStatus.textContent = "❤️ শুভ বিজয়া দশমী";
            break;

        default:

            if (today.getDate() < 16) {

                festivalStatus.textContent = "অপেক্ষার আর মাত্র...";

            } else {

                festivalStatus.textContent = "আবার এসো মা 🌺";

            }

    }

}

// Countdown
function updateCountdown() {

    const now = new Date().getTime();

    const distance = pujaDate - now;

    updateFestivalStatus();
    highlightCurrentDay();

    if (distance <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        pujaMessage.textContent =
            "মা এসে গেছেন! শুভ শারদীয়া ও শুভ দুর্গোৎসব। 🌺";

        clearInterval(countdownInterval);

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    daysElement.textContent = formatNumber(days);
    hoursElement.textContent = formatNumber(hours);
    minutesElement.textContent = formatNumber(minutes);
    secondsElement.textContent = formatNumber(seconds);

}

// Initial Run
updateCountdown();

// Update Every Second
const countdownInterval = setInterval(updateCountdown, 1000);
/* =========================================
   BACKGROUND MUSIC
========================================= */
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const soundWave = document.getElementById("soundWave");

console.log("bgMusic:", bgMusic);
console.log("musicToggle:", musicToggle);
console.log("soundWave:", soundWave);

musicToggle.addEventListener("click", async () => {

    alert("Button clicked");

    console.log(bgMusic);

    console.log(bgMusic.src);
    try {
        if (bgMusic.paused) {
            await bgMusic.play();
            soundWave.style.display = "block";
        } else {
            bgMusic.pause();
            soundWave.style.display = "none";
        }
    } catch (err) {
        alert(err.message);
        console.error(err);
    }
});