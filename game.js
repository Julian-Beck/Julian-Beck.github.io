
function update() {
    if (mouseX != null && mouseY != null) {
        updateVelos();
        updatePositions();
    }
}

function updateVelos() {
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        if (velocities[i][0] + 1/(mouseX - box.offsetLeft) != Infinity) {
            velocities[i][0] += 1/(mouseX - box.offsetLeft) }
        if (velocities[i][1] + 1/(mouseY - box.offsetTop) != Infinity) {
            velocities[i][1] += 1/(mouseY - box.offsetTop)}
        console.log(velocities[i])
    }
}

function updatePositions() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].offsetLeft += velocities[i][0];
        boxes[i].offsetTop += velocities[i][1];
    }
}


let game = document.getElementById("game");
game.style.width = "100vw";
game.style.height = "100vh";


let mouseX, mouseY;
let pos = [];
let boxes = [];
let velocities = [];
let timers = []

for (let i = 0; i < 1; i++) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let box = document.createElement("div");

    let left = 0;
    let top = 0;
    do {
        left = Math.floor(Math.random() * 100);
        top = Math.floor(Math.random() * 100);
    } while (pos.includes((left, top)))

    box.style = `position: fixed;
                    left: ${left}vw;
                    top: ${top}vh;
                    height: 1vh; width: 1vw; 
                    background-color: rgb(${r}, ${g}, ${b})`;
    pos.push((left, top));
    boxes.push(box)
    velocities.push([0,0]);

    game.append(box);
}

game.addEventListener('mouseenter', () => {
    timer = setInterval(() => update(), 100);
});

game.addEventListener('mousemove', (event) => {
    mouseX = event.x;
    mouseY = event.y;
});

game.addEventListener('mouseleaver', () => {
    clearInterval(timer)
});
