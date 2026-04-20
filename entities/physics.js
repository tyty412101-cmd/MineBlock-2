function applyPhysics(p) {
    p.vy += 0.4;
    p.y += p.vy;

    if (p.y > 48) {
        p.y = 48;
        p.vy = 0;
        p.onGround = true;
    } else {
        p.onGround = false;
    }
}
