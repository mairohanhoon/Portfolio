import { useState } from "react";
import Balatro from "../Yes/Balatro/Balatro.jsx";
import RotatingText from "./components/RotatingText/RotatingText.jsx";
import NavBar from "./components/Navbar.jsx";
import ASCIIText from "./components/ASCIIText/ASCIIText.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";

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
      <div>
        <div className="text-white text-5xl font-extrabold flex flex-col justify-center">
          <div className="flex">
            <RotatingText
              texts={["REACT", "MERN", "BACKEND", "FRONTEND"]}
              className="px-2 sm:px-2 md:px-3 sm:mx-2 md:mx-3 bg-purple-700 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
            DEVELOPER
          </div>
        </div>
      </div>
      <About/>
      <Education/>
      <About/>
      <About/>
      <About/>
    </div>
  );
}

export default App;
