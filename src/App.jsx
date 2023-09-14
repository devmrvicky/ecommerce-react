import Footer from "./components/footer/Footer";
import Nav from "./components/Nav";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import TopMessage from "./components/TopMessage";

function App() {
  return (
    <>
      <TopMessage />
      <Nav />
      <Home />
      <About />
      <ContactUs />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
