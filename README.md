
Maze Project Documentation
“Maze-licious pathing” 



Team

Luleko Mkhize: Responsible for key directions, navigations and movement through the maze

Annacletter Mafema: Responsible for walls and ground path textures.

Introduction

 

The following document serves as comprehensive documentation for the maze project. This project aims to generate and solve mazes using various algorithms and techniques, such as developing a 3D game utilizing ray-casting.

Project Overview

What is Ray-Casting?

Ray-casting is a technique that transforms a simple form of data into a 3D projection by tracing rays from the viewpoint into the viewing volume.

Intended Audience:

This project is designed for gaming enthusiasts who relish navigating intricate mazes and immersing themselves in captivating gameplay. Furthermore, it functions as an educational resource for those keen on delving into raycasting technology and the intricacies of game development.

Technologies:

The Game was programmed and designed with C programming language with a third party library called Simple DirectMidea Layer(SDL2). This library is used because of its efficiency in giving access to Mouse and computer keyboard. Game window design, wall texture, game roof, game floor, player weapon and Enemy texture are parts of the game in which SDL2 is used highly.

•Ray-casting 
•Python programming : Left hand rule algorithm
•C programming with SDL2
•HTML used for structuring the contents of the game. 
•CSS (Cascading Style Sheets) for styling 

The maze project involves the creation of mazes through algorithmic generation and the implementation of pathfinding algorithms to navigate through them. The primary objectives include


⚠️Caution⚠️ 
“If the prayer arrives to the exit door, it mean failure they are automatically cautioned to turn back and redirect, but if the player reached the end/finish line a show of fireworks will be desplayed”

Architecture:

Ray-casting 
Python programming : Left hand rule algorithm

The maze project involves the creation of mazes through algorithmic generation and the implementation of pathfinding algorithms to navigate through them. The primary objectives include:

 

Project Accomplishment:

Ray-casting was employed to create the walls in the maze game, utilizing LodeV's vector-based method for calculating ray length. By default, textures are applied to the maze walls, although they can be disabled during execution. The maze layouts are defined in 2D arrays within text files, which are parsed when provided as arguments to the maze executable. In these arrays, a value of 0 denotes open space, while any other integers represent walls. Furthermore, we utilized the C language and the SDL2 library for rendering and texture integration.
Step-by-step execution of maze generation algorithms.
Optimization techniques to enhance generation speed and maze quality.
Pathfinding with simple Pythagoras calculations.

The project employs pathfinding algorithms to find the shortest path through the generated mazes. Features of the pathfinding implementation include:
A user-friendly interface facilitates interaction with the mazes. Key features of the interface include:

Input methods for maze customization and generation.
Visualization of maze generation and pathfinding processes.
Controls for navigating through the mazes and observing pathfinding results.
Results and Testing

Movement keys:

W: move forward 
S: turn back to previous row
A: turn left
D: turn right
Two keys can be pressed at the same time for prayer to simultaneously move and turn either left or right.
F: weapons activation
ESC: exit the maze
An exceptional feature we implemented was Wall Collision, which prevents camera rays from passing through walls, enhancing the immersive experience of the game.

Challenges:

The biggest problems we had in our project were understanding ray casting and how SDL2 works. It was hard at first to connect science with programming. The instructions we had weren't very clear, which made it even harder. This was the main challenge for us. We looked at lots of articles, videos, and other stuff to try to understand better. Thanks to my team member, Annacletter Mafema, we were able to get through the hardest parts of the project.

Tackling the Toughest Technical Hurdle

At the project's inception, a significant hurdle we encountered revolved around preventing the player from traversing through walls. This presented a formidable challenge as we strived to maintain the game's fluidity while addressing this issue. To overcome this obstacle, I delved into various methods to restrict player movement through walls, collaborating closely with my team to brainstorm and experiment with potential solutions. Following extensive testing and iteration, we successfully devised a robust system. As a result, players can now navigate the maze without inadvertently passing through walls, enhancing the overall enjoyment of the game.

Communication/Collaboration:

Collaboration within our team presented a successful work environment. Coordinating tasks and clarifying roles was crucial to prevent overlapping work. Conflicting ideas also surfaced but were managed through open dialogue and compromise. Regular team meetings provided a platform to discuss progress and address concerns. Clear communication channels, such as designated messaging platforms, streamlined information dissemination. Leveraging collaboration tools enhanced productivity and coordination. Respect for diverse perspectives fostered an environment where innovative solutions could be found. Overall, by prioritizing clear communication, task coordination, and mutual respect, our team successfully navigated challenges and achieved project goals.

Lessons Learned:

We developed a fully operational 3D ray-casting game, which provided us with invaluable insights into real-time rendering, collision detection, and fundamental game development principles. Through this project, we recognized the critical importance of teamwork and effective communication in resolving technical challenges. This hands-on experience has amplified our enthusiasm for software engineering and motivated us to seek further opportunities within the gaming industry. Additionally, it reinforced the notion of technology's ability to enhance experiences and unite individuals with shared interests.

Project Updates:

We had to include HTML (Hypertext Markup Language) which is typically considered part of the front end in web development. It's a markup language used for structuring the content of the game. Together with CSS (Cascading Style Sheets) for styling.

Progress:

Based on our progress so far, finishing the project on time might be tough. We've made good progress, but we've also run into unexpected problems and delays, like technical issues and new requirements popping up. Still, we're committed to delivering a great product on time. We're adjusting our plans, making sure we use our resources wisely, and keeping everyone in the loop. We'll work hard to overcome these challenges and get the job done as quickly as possible. 

This week has marked considerable progress in advancing the development of our application, Maze-licious game. The momentum remains strong as we integrate features and polish the user experience. With just a handful of tasks left, the project is approaching its conclusion, meriting an updated rating of 8 out of 10

Screenshot

     

Application Info
●Toolbar 
How to play (rules)
Help
Feedback
Community
Rate the App
●Boadbar
Username bar- player profile
Characters- player chooses a character
Multi player- playing with AI’s (only 3 player)
Online 2 player- invite/challenge a friend 
Online 4 player- 3 challengers
Player browser- search a player
Stats- On all the games
“Info of how many players online and current active games”
Setting- Sound, Allow Challenges

Conclusion
The maze project demonstrates successful implementation of maze generation and pathfinding algorithms, coupled with an intuitive user interface. Through testing and evaluation, valuable insights have been gained, paving the way for further improvements and iterations.



Authors

Lulekoh - 
lulekoleoquintus12@gmail.com

Annacletter -
anna.cletter12@gmail.com



