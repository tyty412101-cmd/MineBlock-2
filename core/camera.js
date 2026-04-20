function getCamera(player) {
    return {
        x: player.x * 32 - canvas.width / 2,
        y: player.y * 32 - canvas.height / 2
    };
}
