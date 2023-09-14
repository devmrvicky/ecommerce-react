import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./components/pages/about/About.jsx";
import Home from "./components/pages/home/Home.jsx";
import ContactUs from "./components/pages/contact/ContactUs.jsx";
import SignUp from "./components/pages/signup/SignUp.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <ContactUs />,
//       },
//       {
//         path: "signup",
//         element: <SignUp />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
