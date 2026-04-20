const inventory = {
    slots: new Array(9).fill(null),
    selected: 0
};

function renderInventory() {
    let bar = document.getElementById("inventory");

    if (!bar) {
        bar = document.createElement("div");
        bar.id = "inventory";
        document.body.appendChild(bar);

        bar.style.position = "absolute";
        bar.style.bottom = "10px";
        bar.style.left = "50%";
        bar.style.transform = "translateX(-50%)";
        bar.style.display = "flex";
        bar.style.gap = "5px";
    }

    bar.innerHTML = "";

    inventory.slots.forEach((item, i) => {
        const slot = document.createElement("div");

        slot.style.width = "40px";
        slot.style.height = "40px";
        slot.style.border = i === inventory.selected ? "3px solid yellow" : "2px solid white";
        slot.style.background = "#222";
        slot.style.color = "white";
        slot.style.display = "flex";
        slot.style.alignItems = "center";
        slot.style.justifyContent = "center";

        slot.textContent = item ? item[0].toUpperCase() : "";

        slot.onclick = () => inventory.selected = i;

        bar.appendChild(slot);
    });
}
