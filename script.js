const targetDate = new Date('2026-02-27T23:59:59').getTime();
// const finalDate = new Date(Date.now() + 56 * 24 * 60 * 60 * 1000).getTime();
// yg diatas klo misalnya hitung tgl final jg cmn nda perlu sih

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerText = 'The event has started!';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
});