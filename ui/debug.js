let debugDiv;

function initDebug() {
    debugDiv = document.createElement("div");

    debugDiv.style.position = "absolute";
    debugDiv.style.top = "10px";
    debugDiv.style.left = "10px";
    debugDiv.style.color = "lime";
    debugDiv.style.fontFamily = "monospace";
    debugDiv.style.background = "rgba(0,0,0,0.5)";
    debugDiv.style.padding = "8px";

    document.body.appendChild(debugDiv);
}

function updateDebug(player, fps) {
    if (!debugDiv) return;

    debugDiv.innerHTML = `
        FPS: ${fps.toFixed(1)}<br>
        X: ${player.x.toFixed(2)}<br>
        Y: ${player.y.toFixed(2)}
    `;
}
