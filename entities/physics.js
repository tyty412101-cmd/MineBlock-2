function applyPhysics(player) {
    player.vy += 0.5;
    player.y += player.vy * 0.1;

    if (player.y > 28) {
        player.y = 28;
        player.vy = 0;
        player.onGround = true;
    } else {
        player.onGround = false;
    }
}
