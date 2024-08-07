Simple Logo Generator
Description
This command-line application allows freelance web developers to generate a simple logo for their projects. Users can input text, text color, shape, and shape color to create an SVG file. This tool helps developers avoid the need to hire a graphic designer for basic logo creation.

Table of Contents
Installation
Usage
Acceptance Criteria
Mock-Up
Directory Structure
Additional Requirements
Testing
Video Submission
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd simple-logo-generator
Install the required dependencies:

bash
Copy code
npm install
Usage
Run the application:

bash
Copy code
node index.js
Follow the prompts to input:

Text (up to three characters)
Text color (color keyword or hexadecimal number)
Shape (circle, triangle, or square)
Shape color (color keyword or hexadecimal number)
After entering all prompts, an SVG file named logo.svg will be created in the project directory, and the message "Generated logo.svg" will be printed in the command line.

Open the logo.svg file in a browser to view the generated logo.

Acceptance Criteria
md
Copy code
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
Mock-Up
The following image shows a mock-up of the generated SVG given the following input entered by the user: SVG for the text, white for the text color, circle from the list of shapes, and green for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:



Directory Structure
md
Copy code
.  
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    └── shapes.test.js  // Jest tests for shapes
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions           
Additional Requirements
The application should use Jest for running the unit tests and Inquirer for collecting input from the user.
The application will be invoked by using the following command:
bash
Copy code
node index.js
The Triangle, Circle, and Square classes should be implemented, and their render() method should return a string for the corresponding SVG file with the given shape color.
Example test:
js
Copy code
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
Testing
To run the tests, use the following command:

bash
Copy code
npm test
Video Submission
