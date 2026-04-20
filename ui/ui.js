function renderUI(ctx, player) {
    ctx.fillStyle = "white";
    ctx.font = "16px monospace";

    ctx.fillText("Mineblock", 10, 20);
    ctx.fillText("X: " + Math.floor(player.x), 10, 40);
    ctx.fillText("Y: " + Math.floor(player.y), 10, 60);
}
