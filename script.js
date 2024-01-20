const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const happy = document.getElementById('happy');
const sad = document.getElementById('sad');

const h2 = document.getElementById('h2');
const h1 = document.getElementById('h1');
const gifContainer = document.getElementById('gifContainer');

noButton.addEventListener('click', () => {
    // Specify the radius of the phone screen
    const phoneRadius = 50;

    // Calculate random position within the phone radius
    const randomAngle = Math.random() * 3 * Math.PI;
    const randomX = window.innerWidth / 3 + phoneRadius * Math.cos(randomAngle);
    const randomY = window.innerHeight / 3 + phoneRadius * Math.sin(randomAngle);

    // Set the new position
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener("click", () => {
    happy.style.display = "flex";
    sad.style.display = "none";
    h1.style.display = "flex";
    h2.style.display = "none";
    yesButton.style.display = "none";
    noButton.style.display = "none";
});