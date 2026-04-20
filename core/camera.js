function getCamera(player) {
    return {
        x: player.x * 32 - window.innerWidth / 2,
        y: player.y * 32 - window.innerHeight / 2
    };
}
