function getBlockColor(type) {
    const colors = {
        [BLOCK.GRASS]: "#3cb043",
        [BLOCK.DIRT]: "#8b5a2b",
        [BLOCK.STONE]: "#777",
        [BLOCK.SAND]: "#f4e19c",
        [BLOCK.WATER]: "#3399ff",
        [BLOCK.WOOD]: "#6b4423",
        [BLOCK.LEAVES]: "#2e8b57"
    };

    return colors[type] || "#87ceeb";
}
