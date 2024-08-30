import { useEffect, useState } from "react";
import backgroundVideo from "../assets/backgroundVideo.mp4";

const LandingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className="relative flex h-screen flex-col items-center justify-start bg-cover bg-center">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover">
          <source
            src={backgroundVideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex-[1]"></div>
        <h1
          className={`relative text-center text-6xl text-white transition-opacity duration-1000 sm:text-6xl md:text-8xl ${isLoaded ? "animate-fadeIn" : "opacity-0"}`}>
          ŠIROKI BRIJEG
          <br />
          LANDMARKS AR
        </h1>
        <h2
          className={`sm:text-md relative mx-10 my-5 text-center text-2xl text-white transition-opacity delay-1000 duration-1000 md:text-4xl ${isLoaded ? "animate-fadeInDelay" : "opacity-0"}`}>
          Experience Široki Brijeg through augmented reality
        </h2>
        <div className="flex-[2]"></div>
      </div>
      <div id="how-to-use">how to use</div>
      <div id="download">download</div>
    </>
  );
};

export default LandingPage;
