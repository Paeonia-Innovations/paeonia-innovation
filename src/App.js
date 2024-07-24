import React, { useEffect, useState } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { ValueProposition } from "./components/valueproposition";
import { CuttingEdge } from "./components/cuttingEdge";
import { Culture } from "./components/culture";
import { Challenges } from "./components/challenges";
import { Projects } from "./components/projects";
import { Purpose } from "./components/purpose";
import { Mission } from "./components/mission";
import { Vision } from "./components/vision";
import { About } from "./components/about";
// import { Services } from "./components/services";
//import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import { BackgroundVideo } from "./components/backgroundVideo";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setLandingPageData(JsonData);

    const videoTimer = setTimeout(() => {
      setVideoLoaded(true);
    }, 5500);

    return () => {
      clearTimeout(videoTimer);
    };
  }, []);

  return (
    <div>
      <BackgroundVideo />
      <div className="content">
        {/* <Header data={landingPageData.Header} /> */}
        {videoLoaded && (
          <>
            <Navigation />
            <Header data={landingPageData.Header} />
            <ValueProposition
              id="valueproposition"
              data={landingPageData.ValueProposition}
            />
            <CuttingEdge id="cuttingEdge" data={landingPageData.CuttingEdge} />
            <Culture id="culture" data={landingPageData.Culture} />
            <Challenges id="challenges" data={landingPageData.Challenges} />
            <Projects id="projects" data={landingPageData.Projects} />
            <Purpose id="purpose" data={landingPageData.Purpose} />
            <Mission id="mission" data={landingPageData.Mission} />
            <Vision id="vision" data={landingPageData.Vision} />
            {/* <About id="about" data={landingPageData.About} /> */}
            {/* <Services id="services" data={landingPageData.Services} /> */}
            {/* <Gallery id="gallery" data={landingPageData.Gallery} /> */}
            <Contact id="contact" data={landingPageData.Contact} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
