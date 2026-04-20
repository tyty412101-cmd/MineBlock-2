const CHUNK_SIZE = 16;

function getBlock(world, x, y) {
    if (y < 0 || y >= world.length) return BLOCK.AIR;
    if (x < 0 || x >= world[0].length) return BLOCK.AIR;

    return world[y][x];
}

function setBlock(world, x, y, type) {
    if (y < 0 || y >= world.length) return;
    if (x < 0 || x >= world[0].length) return;

    world[y][x] = type;
}
