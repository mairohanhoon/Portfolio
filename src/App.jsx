import { useState } from "react";
import Balatro from "../Yes/Balatro/Balatro.jsx";
import RotatingText from "./components/RotatingText/RotatingText.jsx";
import NavBar from "./components/Navbar.jsx";
import ASCIIText from "./components/ASCIIText/ASCIIText.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Project from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import TechStack from "./components/TechStack.jsx";
import Info from "./components/Info.jsx";
import ContactMe from "./components/ContactMe.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden">

      {/* Background animation */}
      <div className="fixed inset-0 -z-10">
        <Balatro
          color3="#000000"
          color2="#444444"
          color1="#222222"
          isRotate={false}
          mouseInteraction={false}
          pixelFilter={7000}
        />
      </div>

      {/* Foreground text */}

      <NavBar />
      <Info/>
      <About/>
      <Education/>
      <Project/>
      <Experience/>
      <TechStack/>
      <ContactMe/>
    </div>
  );
}

export default App;
