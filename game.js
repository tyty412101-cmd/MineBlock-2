const canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const world = createWorld(800, 120);
const player = createPlayer(10, 10);

function update() {
    handleInput(player);
    applyPhysics(player);
}

function renderFrame() {
    render(ctx, world, player);
}

startGameLoop(update, renderFrame);
