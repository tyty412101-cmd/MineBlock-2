function generateWorld(width, height) {
    const world = [];

    for (let y = 0; y < height; y++) {
        const row = [];

        for (let x = 0; x < width; x++) {

            let block = BLOCK.AIR;

            if (y === 50) block = BLOCK.GRASS;
            else if (y > 50 && y <= 55) block = BLOCK.DIRT;
            else if (y > 55) block = BLOCK.STONE;

            row.push(block);
        }

        world.push(row);
    }

    return world;
}
