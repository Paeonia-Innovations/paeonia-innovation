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
// import { Services } from "./components/services";
//import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import { BackgroundVideo } from "./components/backgroundVideo";

import { NovelMidIRSpectrometer } from "./components/novelMidIRSpectrometer";
// import { PIModelGallery } from "./components/piModelGallery";
import { AboutSpectrometer } from "./components/aboutSpectrometer";
// import { MidIRSpectroscopy } from "./components/midIRSpectroscopy";
// import { KineticsThermoMolecular } from "./components/kineticsThermoMolecular";
import { InlineMonitoring } from "./components/inlineMonitoring";
// import { RobustAndCompact } from "./components/robustAndCompact";
import { Simple } from "./components/simple";
import { ProductSpecification } from "./components/productSpecification";
import { ContactProduct } from "./components/contactProduct";

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
  const [showSpectrometerProductPage, setShowSpectrometerProductPage] =
    useState(false);
  const [targetSection, setTargetSection] = useState("homePage");

  useEffect(() => {
    setLandingPageData(JsonData);

    const videoTimer = setTimeout(() => {
      setVideoLoaded(true);
    }, 5500);

    return () => {
      clearTimeout(videoTimer);
    };
  }, []);

  const scrollToTop = () => {
    const element = document.getElementById("page-top");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!showSpectrometerProductPage) {
      if (targetSection === "homePage") {
        scrollToTop();
      } else if (targetSection === "contactPage") {
        scrollToContact();
      }
    }
  }, [showSpectrometerProductPage, targetSection]);

  const handleNavigationClick = (section) => {
    setTargetSection(section); // Update target section
    if (section === "productPage") {
      setShowSpectrometerProductPage(true);
    } else {
      setShowSpectrometerProductPage(false);
    }
  };

  //Function to handle navigation
  // const handleNavigationClick = (section) => {
  //   if (section === "productPage") {
  //     setShowSpectrometerProductPage(true);
  //   } else {
  //     setShowSpectrometerProductPage(false);
  //     if (section === "homePage") {
  //       scrollToTop();
  //     } else if (section === "contactPage") {
  //       scrollToContact();
  //     }
  //   }
  // };

  // const scrollToTop = () => {
  //   document.getElementById("page-top").scrollIntoView({ behavior: "smooth" });
  // };

  // const scrollToContact = () => {
  //   document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div>
      {/* {!showSpectrometerProductPage && <BackgroundVideo />} */}
      <div className="content">
        <Navigation onNavClick={handleNavigationClick} />
        {showSpectrometerProductPage ? (
          <>
            <NovelMidIRSpectrometer
              id="novelMidIRSpectrometer"
              data={landingPageData.NovelMidIRSpectrometer}
            />
            <Simple id="simple" data={landingPageData.Simple} />
            {/* <PIModelGallery
              id="pimodelgallery"
              data={landingPageData.PIModelGallery}
            /> */}
            <AboutSpectrometer
              id="aboutSpectrometer"
              data={landingPageData.AboutSpectrometer}
            />
            <InlineMonitoring
              id="inlineMonitoring"
              data={landingPageData.InlineMonitoring}
            />
            {/* <MidIRSpectroscopy
              id="midIRSpectroscopy"
              data={landingPageData.MidIRSpectroscopy}
            />
            <KineticsThermoMolecular
              id="kineticsThermoMolecular"
              data={landingPageData.KineticsThermoMolecular}
            />
            
            <RobustAndCompact
              id="robustAndCompact"
              data={landingPageData.RobustAndCompact}
            /> */}

            <ProductSpecification
              id="productSpecification"
              data={landingPageData.ProductSpecification}
            />
            <ContactProduct
              id="contactProduct"
              data={landingPageData.ContactProduct}
            />
          </>
        ) : (
          <>
            <BackgroundVideo />
            {videoLoaded && (
              <>
                {/* <Navigation onNavClick={handleNavigationClick} /> */}
                <Header data={landingPageData.Header} />
                <ValueProposition
                  id="valueproposition"
                  data={landingPageData.ValueProposition}
                />
                <CuttingEdge
                  id="cuttingEdge"
                  data={landingPageData.CuttingEdge}
                />
                <Culture id="culture" data={landingPageData.Culture} />
                <Challenges id="challenges" data={landingPageData.Challenges} />
                <Projects id="projects" data={landingPageData.Projects} />
                <Purpose id="purpose" data={landingPageData.Purpose} />
                <Mission id="mission" data={landingPageData.Mission} />
                <Vision id="vision" data={landingPageData.Vision} />
                <Contact id="contact" data={landingPageData.Contact} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
