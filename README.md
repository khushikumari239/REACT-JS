# REACT-JS

Let's create using React and then react now a TODO- APP

Step 1: Setup Your React App (if not done yet)
If you haven’t created the app:

npx create-react-app my-app
cd my-app


Step 2: Create the TODO.jsx File
In src/, create a file named TODO.jsx and add the following code:

Step 3: Import TODO in App.jsx
In src/App.jsx, replace the content with:

Step 4: Make Sure index.js Renders App.jsx
In src/index.js, make sure it looks like this:

```jsx 
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

Step 5: Run the App
In your terminal (inside the project folder):
npm install       # Only if node_modules is missing
npm start
