# Demo Repo for useRef() Bug in Next

This repo demonstrates a bug that occurs when importing a component using useRef() from one Next/React/Typescript project to another. The bug occurs when using any version of Next from 13.3.2 to the current version (13.4.19).

The bug reads "TypeError: Cannot read properties of null (reading 'useRef)"

To recreate the bug:
1. Create a Next app with Typescript. Name it component-library.
2. In the component-library, build a component that requires useRef().
3. Create a main.ts file in the root of this app in order to export the component.
4. Create a second Next app with Typescript. Name it demo-app.
5. In the next.config.js file of the demo-app, add "transpilePackages: ["component-library"]" to the nextConfig.
6. In the index.tsx file, import the component that was created in the component library.
7. Add the component to the index.tsx page.
8. Type "npm run dev" into the terminal. When the page loads, you should expect to see the error "TypeError: Cannot read properties of null (reading 'useRef)"
