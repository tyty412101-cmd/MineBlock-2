// world/chunks.js

const CHUNK_SIZE = 16;
const WORLD_HEIGHT = 64;

const chunks = {};

function getChunkKey(cx, cz) {
  return `${cx},${cz}`;
}

export function generateChunk(cx, cz) {
  const chunk = [];

  for (let x = 0; x < CHUNK_SIZE; x++) {
    chunk[x] = [];

    for (let z = 0; z < CHUNK_SIZE; z++) {
      chunk[x][z] = [];

      for (let y = 0; y < WORLD_HEIGHT; y++) {
        // Terrain height
        const height = 10 + Math.floor(Math.sin((cx * CHUNK_SIZE + x) * 0.2) * 3);

        if (y > height) chunk[x][z][y] = "air";
        else if (y === height) chunk[x][z][y] = "grass";
        else if (y > height - 3) chunk[x][z][y] = "dirt";
        else chunk[x][z][y] = "stone";
      }
    }
  }

  return chunk;
}

export function getChunk(cx, cz) {
  const key = getChunkKey(cx, cz);

  if (!chunks[key]) {
    chunks[key] = generateChunk(cx, cz);
  }

  return chunks[key];
}

export function getBlock(x, y, z) {
  const cx = Math.floor(x / CHUNK_SIZE);
  const cz = Math.floor(z / CHUNK_SIZE);

  const chunk = getChunk(cx, cz);

  const lx = ((x % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  const lz = ((z % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;

  return chunk[lx][lz][y] || "air";
}

export function setBlock(x, y, z, type) {
  const cx = Math.floor(x / CHUNK_SIZE);
  const cz = Math.floor(z / CHUNK_SIZE);

  const chunk = getChunk(cx, cz);

  const lx = ((x % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  const lz = ((z % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;

  chunk[lx][lz][y] = type;
}
