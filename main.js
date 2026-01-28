const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const numbersContainer = document.querySelector(".numbers");

// Create numbers dynamically
for (let i = 1; i <= 12; i++) {
    const num = document.createElement("span");
    num.innerText = i;

    const angle = (i * 30) * (Math.PI / 180);
    const radius = 170;

    const x = 200 + radius * Math.sin(angle);
    const y = 200 - radius * Math.cos(angle);

    num.style.left = `${x - 10}px`;
    num.style.top = `${y - 10}px`;

    numbersContainer.appendChild(num);
}

function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secDeg = seconds * 6;
    const minDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;

    secondHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
