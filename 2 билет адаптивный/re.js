// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const boxes = document.querySelectorAll('.box img');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            box.style.animation = "example 4s infinite";
        });
    });
});
