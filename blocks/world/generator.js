function generateWorld(width, height) {
    const world = [];

    for (let y = 0; y < height; y++) {
        const row = [];

        for (let x = 0; x < width; x++) {
            if (y > 35) row.push(BLOCK_TYPES.STONE);
            else if (y > 30) row.push(BLOCK_TYPES.DIRT);
            else if (y === 30) row.push(BLOCK_TYPES.GRASS);
            else row.push(BLOCK_TYPES.AIR);
        }

        world.push(row);
    }

    return world;
}
