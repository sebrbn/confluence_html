function getTimeLeft() {
  const target = new Date("2025-09-21T00:00:00");
  const now = new Date();
  const diff = target - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function updateCountdown() {
  const timer = document.getElementById("countdown-timer");
  const t = getTimeLeft();
  timer.innerHTML = `
    <div>${String(t.days).padStart(2, '0')}<span>Days</span></div>
    <div>${String(t.hours).padStart(2, '0')}<span>Hours</span></div>
    <div>${String(t.minutes).padStart(2, '0')}<span>Minutes</span></div>
    <div>${String(t.seconds).padStart(2, '0')}<span>Seconds</span></div>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();
