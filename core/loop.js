function startGameLoop(update, render) {
    function loop() {
        update();
        render();
        requestAnimationFrame(loop);
    }
    loop();
}
