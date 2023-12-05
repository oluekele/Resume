import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Works from "./components/Work/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      < Navbar />
      < Intro />
      < About />
      < Works />
      < Contact />
      < Footer />
    </div>
  );
}

export default App;
