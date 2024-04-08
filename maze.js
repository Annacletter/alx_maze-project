// Define a function to cast rays and render the 3D scene
function castRays(player, maze, ctx, canvasWidth, canvasHeight) {
    const FOV = Math.PI / 3; // Field of view
    const NUM_RAYS = canvasWidth; // Number of rays to cast

    // Iterate over each ray
    for (let i = 0; i < NUM_RAYS; i++) {
        // Calculate the angle for the current ray
        const rayAngle = player.direction - FOV / 2 + (i / NUM_RAYS) * FOV;

        // Initialize ray variables
        let distanceToWall = 0;
        let hitWall = false;
        let wallHitX = 0;
        let wallHitY = 0;

        // Ray direction
        const rayDirX = Math.cos(rayAngle);
        const rayDirY = Math.sin(rayAngle);

        // Starting position of the ray
        let posX = player.x;
        let posY = player.y;

        // Incremental steps for ray casting
        let stepX = rayDirX < 0 ? -1 : 1;
        let stepY = rayDirY < 0 ? -1 : 1;

        // Calculate initial distance to the nearest wall
        let deltaX = Math.abs(1 / rayDirX);
        let deltaY = Math.abs(1 / rayDirY);
        let sideDistX = (rayDirX < 0 ? posX : (Math.ceil(posX) - posX)) * deltaX;
        let sideDistY = (rayDirY < 0 ? posY : (Math.ceil(posY) - posY)) * deltaY;

        // Perform DDA (Digital Differential Analyzer) algorithm for ray casting
        while (!hitWall) {
            // Jump to next map square, OR in x-direction, OR in y-direction
            if (sideDistX < sideDistY) {
                sideDistX += deltaX;
                posX += stepX;
                wallHitY = posY;
                wallHitX = posX;
            } else {
                sideDistY += deltaY;
                posY += stepY;
                wallHitX = posX;
                wallHitY = posY;
            }

            // Check if ray is out of bounds
            if (posX < 0 || posX >= maze.width || posY < 0 || posY >= maze.height) {
                hitWall = true;
                distanceToWall = 100000; // Set a large distance for out of bounds
            } else if (maze.map()[Math.floor(posX)][Math.floor(posY)]) { // Check if ray hit a wall
                hitWall = true;

                // Calculate distance to the wall
                if (sideDistX < sideDistY) {
                    distanceToWall = sideDistX * Math.cos(rayAngle - player.direction);
                } else {
                    distanceToWall = sideDistY * Math.cos(rayAngle - player.direction);
                }
            }
        }

        // Calculate height of the wall slice based on distance
        const lineHeight = canvasHeight / distanceToWall;

        // Calculate where to draw the top and bottom of the wall slice
        const wallTop = (canvasHeight - lineHeight) / 2;
        const wallBottom = (canvasHeight + lineHeight) / 2;

        // Draw the wall slice
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.moveTo(i, wallTop);
        ctx.lineTo(i, wallBottom);
        ctx.stroke();
    }
}

// Update function to include ray casting
function update() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the maze
    draw.redrawMaze(cellSize);

    // Cast rays and render the 3D scene
    castRays(player, maze, ctx, canvas.width, canvas.height);

    // Draw the player
    player.redrawPlayer(cellSize);
}

// Main game loop
function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}
