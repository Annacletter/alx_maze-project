#####Tasks 0. Walls ! In this first part, you’ll have to:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Project Name</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Your Project Name</h1>
        <nav>
            <ul>
                <li><a href="#intro">Intro</a></li>
                <!-- Add more navigation links as needed -->
            </ul>
        </nav>
    </header>

    <section id="intro">
        <div class="intro-content">
            <img src="cover-image.jpg" alt="Cover Image">
            <p>A one-line phrase and/or description of your project.</p>
            <a href="deployed-project-link" class="button">Deployed Project</a>
        </div>
    </section>

    <!-- Add more sections as needed -->

    <script src="script.js"></script>
</body>
</html>


body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

.intro-content {
    text-align: center;
    padding: 50px 0;
}

.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
}

/* Add more styles as needed */

#Images
* Folder file carrying the images of our
* Caracters/Avators/Players
* Red flag that shows that the player has reach deatination/won
* Fail massage for wrong exit tge menu bar to restart

Create a window with SDL2 Use raycasting to draw walls on your window ! You don’t need to be able to rotate the camera during the execution in this part, but you must provide a way to change the angle of the camera in your code to see if it works after recompiling it The color of the walls must be different from the color of the ground/ceil The map doesn’t need to be parsed from a file, but you must provide a way to modify it in your code to see if it works after recompiling it. (e.g. using an array of arrays of integers or characters).

Orientation In this part, you must draw a different color depending on the orientation of the walls.
You must at least draw walls facing NORTH and SOUTH in a different color from walls facing EAST and WEST. 2. Rotation You must provide a way to rotate the camera during the execution.

For example, you can rotate the camera when the left,right arrows are pressed on the keyboard. Or you can rotate the camera when the mouse moves, just like a FPS game ! 3. Move You must provide a way to move the camera during the execution.

For example, you can move the camera when the w,a,s,d keys are pressed on the keyboard. 4. Ouch ! In this part, you must handle the collisions of the player (yes, let’s call the camera player now, it’s getting serious) with the walls.

The player must not be able to enter walls You can make the player slide on the walls instead of just stop it. 5. Parser In this part you must implement a parser to get the map from a file.

You are free to define the standards of your map (The character for a wall, the character for nothing, the extension of the file if you want, …) Your program will need a parameter to run which will be the path to the map file 6. Draw the map In this part, you must draw the map on the window.

You’re free to draw the map where you want, with the color you want, … You must provide a way to enable/disable it during the execution Include the player’s line of sight in the map 7. Coding style + Documentation Check if you code fits the Holberton School coding style. Check if your code is well documented and respect the Holberton School documentation format 8. Textures In this part you have to add textures on your walls ! 9. Multi task ! Add a way to move on several directions and rotate in the same time. Basically in this part you’ll have to handle multiple events on the same frame.

For example, if the keys to move are w,a,s,d:

If the keys w and s are pressed in the same time, the player shouldn’t move. If the keys w and d are pressed in the same time, the player should move forward and right in the same time, … 10. Ground textures In this part you have to add textures on the ground and/or on the ceiling ! 11. Weapons Add weapons textures ! 12. Enemies Add some enemies ! 13. Make it rain Add rain and a possibility to stop / start the rain with a key. 14. Extra option Shadows, special lightning, etc… get creative!

#Document for "Maze-licious" 

https://docs.google.com/document/d/17c9F1tORUKDi2XRtXBhAWHzUf83uxE48rJCwabaudV0/edit 

###Authors/Creators @Annacletter @Lulekoh
