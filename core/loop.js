function startGameLoop(ctx, world, player) {

    function loop() {
        update(player);
        render(ctx, world, player);
        requestAnimationFrame(loop);
    }

    loop();
}
