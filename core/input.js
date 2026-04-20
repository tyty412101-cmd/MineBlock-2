const keys = {};

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

function handleInput(player) {
    if (keys["a"]) player.x -= 0.2;
    if (keys["d"]) player.x += 0.2;

    if (keys["w"] && player.onGround) {
        player.vy = -8;
    }
}
