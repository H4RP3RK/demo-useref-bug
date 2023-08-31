# React imports bug in Next

This repo demonstrates a bug that occurs when importing a component using useRef() from one Next/React/Typescript project to another. The bug occurs when using any version of Next from 13.3.2 to the current version (13.4.19).

The bug reads "TypeError: Cannot read properties of null (reading 'useRef)"

To use the repo locally:
1. Click on the green 'Code' button at the top right of the screen.
2. Download the zip file.
3. Unzip the file on your local system.
4. Open your code editor e.g. VS Code
5. First, open the component library folder in your code editor.
6. Type 'npm i' in your terminal to install all of the project's dependencies.
7. Repeat steps 5 and 6 for the demo-app folder.
8. Type 'npm run dev' in your terminal to run the project locally in your web browser.
9. You should expect to see the bug "TypeError: Cannot read properties of null (reading 'useRef)" in your web browser.

The bug can be resolved by:
1. Type 'npm i next@13.3.1' into the terminal to install Next v13.3.1 into the demo-app.
2. Type 'npm run dev' to run a local version of the app in your web browser.
3. You should now see a button.
4. Open DevTools and navigate to the console.
5. Click on the button and the console should state "Clicked x times", with x = the number of times it has been clicked.

To recreate the bug:
1. Create a Next app with Typescript e.g. app1.
2. In the component-library, build a component that requires any React Hook.
3. Create a main.ts file in the root of this app in order to export the component.
4. Create a second Next app with Typescript e.g. app2.
5. In the next.config.js file of the app2, add "transpilePackages: ["app1"]" to the nextConfig.
6. In the index.tsx file, import the component that was created in the component library.
7. Add the component to the index.tsx page.
8. Type "npm run dev" into the terminal. When the page loads, you should expect to see the error "TypeError: Cannot read properties of null (reading 'useRef)".
