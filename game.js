const canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const world = createWorld(800, 120);
const player = createPlayer(10, 10);

let lastTime = 0;
let fps = 0;

initDebug();

// starter items
inventory.slots[0] = "grass";
inventory.slots[1] = "stone";

function update() {
    handleInput(player);
    applyPhysics(player);
}

function renderFrame() {
    render(ctx, world, player);

    renderInventory();
    updateDebug(player, fps);
}

function gameLoop(time) {
    const delta = time - lastTime;
    fps = 1000 / (delta || 1);
    lastTime = time;

    update();
    renderFrame();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
