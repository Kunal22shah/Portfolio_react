import Navbar from "./components/navbar/Navbar";
import Work from "./components/work/Work";
import Projects from "./components/projects/Projects";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
// import Footer from "./components/footer/Footer";

import { useState } from "react";
import "./App.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />
        <Projects />
        <Work />
        <Contact/>
        
      </div>
      
      {/* <div className="footer">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
