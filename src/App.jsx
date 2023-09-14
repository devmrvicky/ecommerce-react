import Footer from "./components/footer/Footer";
import Nav from "./components/header/Nav";
// import About from "./components/pages/about/About";
// import ContactUs from "./components/pages/contact/ContactUs";
// import Home from "./components/pages/home/Home";
// import SignUp from "./components/pages/signup/SignUp";
import TopMessage from "./components/header/TopMessage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <TopMessage />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
