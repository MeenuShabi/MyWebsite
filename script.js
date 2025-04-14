let text = document.getElementById("movingText");
let position = 0;
let direction = 1;

function animateText() {
    position += direction;
    if (position > 300 || position < 0) {
        direction *= -1;
    }
    text.style.left = position + "px";
    requestAnimationFrame(animateText);
}

text.style.position = "relative";
animateText();
