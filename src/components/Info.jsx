import { MorphingText } from "./magicui/morphing-text";
import { TypingAnimation } from "./magicui/typing-animation";
import RotatingText from "./RotatingText/RotatingText";
import ScrollVelocity from "./ScrollVelocity/ScrollVelocity";

const Info = () => {
  const texts = [
    "FullStack Developer",
    "BackEnd Developer",
    "FrontEnd Developer",
  ];
  return (
    <div className="flex flex-col justify-center items-center mt-10 max-w-[70%] mx-auto space-y-1">
      <p className="text-white text-center text-5xl font-extrabold">
        Hi I'm Rohan Tiwari
      </p>
      <RotatingText
        texts={["Developer", "Engineer", "MERN DEV.", "FullStack DEV.", "BackEnd DEV."]}
        mainClassName="text-white text-2xl font-extrabold px-2 sm:px-2 md:px-3 bg-purple-700 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
      <TypingAnimation className="text-white mt-1">
        Crafting lines of code and learning new technologies
      </TypingAnimation>
    </div>
  );
};

export default Info;
