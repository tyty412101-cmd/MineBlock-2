// ui/debug.js

let debugDiv;

export function initDebug() {
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

export function updateDebug(player, fps) {
  if (!debugDiv) return;

  const cx = Math.floor(player.x / 16);
  const cz = Math.floor(player.z / 16);

  debugDiv.innerHTML = `
    FPS: ${fps.toFixed(1)}<br>
    X: ${player.x.toFixed(2)}<br>
    Y: ${player.y.toFixed(2)}<br>
    Z: ${player.z.toFixed(2)}<br>
    Chunk: ${cx}, ${cz}
  `;
}
