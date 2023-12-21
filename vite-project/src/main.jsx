// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//? Function component example (commented out)
// function MyApp() {
//   return (
//     <div>
//       <h1>custom App😎</h1>
//     </div>
//   );
// }

//? Commented-out React element example (commented out)
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

//? Another way to create a React element using JSX (commented out)
// const anotherElement = (
//   <a href="http://google.com" target="_black">
//     visit Google
//   </a>
// );


//? Using React.createElement to create a React element (commented out)
// const ReactElement = React.createElement(
//   'a',
//   { href: 'http://google.com" target="_black' },
//   'Click me to visit google',
// )

// Rendering using ReactDOM.createRoot (with MyApp component uncommented)
ReactDOM.createRoot(document.getElementById("root"))
  .render(
  //! Uncomment one of the following lines at a time to test different scenarios:

  // Rendering a React component (App.jsx assumed to be a valid component)
  <App />

  // Rendering a commented-out functional component (MyApp)
  // <MyApp />

  // Uncommented-out React element examples
  // reactElement
  // anotherElement

  // Using the functional component directly (commented out)
  // MyApp()
  );
