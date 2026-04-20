function render(ctx, world, player) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cam = getCamera(player);

    for (let y = 0; y < world.length; y++) {
        for (let x = 0; x < world[0].length; x++) {

            const block = world[y][x];
            if (block === BLOCK.AIR) continue;

            ctx.fillStyle = getBlockColor(block);
            ctx.fillRect(
                x * 32 - cam.x,
                y * 32 - cam.y,
                32,
                32
            );
        }
    }

    // Player
    ctx.fillStyle = "red";
    ctx.fillRect(
        player.x * 32 - cam.x,
        player.y * 32 - cam.y,
        32,
        64
    );

    renderUI(ctx, player);
}
