# Docker_Data_Tool
A Docker data tool that handles ingestion to display.

This is a weekend project me and my friend worked on, with the goal of learning and utilizing Docker's capabilities.
It utilizes Docker compose to provide networking between containers. There is a frontend container, a backend container, 
and an nginx container for forwarding traffic among them. There is also a Python container that is focused on parsing data from a remote MySQL database.

<img src="https://raw.githubusercontent.com/MalikKilgore/Docker-Datatool-Demo/master/media/KubeDemo.png"></img>

## Available Scripts

In the project directory, you can run:

### `npm install`
To run the other scripts, you need the project dependencies that are listed within the package.json file.\
This script will install all the required dependencies in a folder called node_modules.\
After the command is done installing everything, the following scripts will now work.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed.
