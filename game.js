const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const world = createWorld(200, 60);
const player = createPlayer(10, 10);

function update(player) {
    if (keys["a"]) player.x -= 0.15;
    if (keys["d"]) player.x += 0.15;

    if (keys["w"] && player.onGround) {
        player.vy = -10;
    }

    applyPhysics(player);
}

startGameLoop(ctx, world, player);
