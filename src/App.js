import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
//import { Simple } from "./components/simple";
import { ProductIntroVideo } from "./components/productIntroVideo";
import { ProductSpecification } from "./components/productSpecification";
import { ContactProduct } from "./components/contactProduct";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
//import { Router } from "express";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [videoLoaded, setVideoLoaded] = useState(false);
  //const [showSpectrometerProductPage, setShowSpectrometerProductPage] = useState(false);
  const [targetSection, setTargetSection] = useState("homePage");

  //const navigate = useNavigate();

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
    if (targetSection === "homePage") {
      scrollToTop();
    } else if (targetSection === "contactPage") {
      scrollToContact();
    }
  }, [targetSection]);

  const handleNavigationClick = (section) => {
    setTargetSection(section);
  };

  // useEffect(() => {
  //   if (!showSpectrometerProductPage) {
  //     if (targetSection === "homePage") {
  //       scrollToTop();
  //     } else if (targetSection === "contactPage") {
  //       scrollToContact();
  //     }
  //   }
  // }, [showSpectrometerProductPage, targetSection]);

  const location = useLocation(); // To track the current route

  useEffect(() => {
    const hash = window.location.hash; // Get the current hash (e.g., #contact)

    if (hash) {
      const element = document.querySelector(hash); // Find the element with that ID
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to that element
      }
    }
  }, [location]);

  // const handleNavigationClick = (section) => {
  //   setTargetSection(section); // Update target section
  //   if (section === "productPage") {
  //     window.history.pushState({}, "", "/novelMidIRSpectrometer"); // Clear the hash (e.g., #home-page)
  //     setShowSpectrometerProductPage(true);
  //     //navigate("/novelMidIRSpectrometer");
  //   } else {
  //     setShowSpectrometerProductPage(false);
  //     //navigate("/");
  //   }
  // };

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
    // <Router>
    <div>
      <Navigation onNavClick={handleNavigationClick} />
      <div className="content">
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <BackgroundVideo />
                {videoLoaded && (
                  <>
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
                    <Challenges
                      id="challenges"
                      data={landingPageData.Challenges}
                    />
                    <Projects id="projects" data={landingPageData.Projects} />
                    <Purpose id="purpose" data={landingPageData.Purpose} />
                    <Mission id="mission" data={landingPageData.Mission} />
                    <Vision id="vision" data={landingPageData.Vision} />
                    <Contact id="contact" data={landingPageData.Contact} />
                  </>
                )}
              </>
            }
          />

          {/* Product Page Route */}
          <Route
            path="/novelMidIRSpectrometer"
            element={
              <>
                <NovelMidIRSpectrometer
                  id="novelMidIRSpectrometer"
                  data={landingPageData.NovelMidIRSpectrometer}
                />
                <ProductIntroVideo
                  id="productIntroVideo"
                  data={landingPageData.ProductIntroVideo}
                />
                <AboutSpectrometer
                  id="aboutSpectrometer"
                  data={landingPageData.AboutSpectrometer}
                />
                <InlineMonitoring
                  id="inlineMonitoring"
                  data={landingPageData.InlineMonitoring}
                />
                <ProductSpecification
                  id="productSpecification"
                  data={landingPageData.ProductSpecification}
                />
                <ContactProduct
                  id="contactProduct"
                  data={landingPageData.ContactProduct}
                />
              </>
            }
          />
        </Routes>
      </div>
    </div>
    //</Router>

    // <div>
    //   <div className="content">
    //     <Navigation onNavClick={handleNavigationClick} />
    //     {showSpectrometerProductPage ? (
    //       <>
    //         <NovelMidIRSpectrometer
    //           id="novelMidIRSpectrometer"
    //           data={landingPageData.NovelMidIRSpectrometer}
    //         />
    //         <ProductIntroVideo
    //           id="productIntroVideo"
    //           data={landingPageData.ProductIntroVideo}
    //         />
    //         <AboutSpectrometer
    //           id="aboutSpectrometer"
    //           data={landingPageData.AboutSpectrometer}
    //         />
    //         <InlineMonitoring
    //           id="inlineMonitoring"
    //           data={landingPageData.InlineMonitoring}
    //         />
    //         <ProductSpecification
    //           id="productSpecification"
    //           data={landingPageData.ProductSpecification}
    //         />
    //         <ContactProduct
    //           id="contactProduct"
    //           data={landingPageData.ContactProduct}
    //         />
    //       </>
    //     ) : (
    //       <>
    //         <BackgroundVideo />
    //         {videoLoaded && (
    //           <>
    //             <Header data={landingPageData.Header} />
    //             <ValueProposition
    //               id="valueproposition"
    //               data={landingPageData.ValueProposition}
    //             />
    //             <CuttingEdge
    //               id="cuttingEdge"
    //               data={landingPageData.CuttingEdge}
    //             />
    //             <Culture id="culture" data={landingPageData.Culture} />
    //             <Challenges id="challenges" data={landingPageData.Challenges} />
    //             <Projects id="projects" data={landingPageData.Projects} />
    //             <Purpose id="purpose" data={landingPageData.Purpose} />
    //             <Mission id="mission" data={landingPageData.Mission} />
    //             <Vision id="vision" data={landingPageData.Vision} />
    //             <Contact id="contact" data={landingPageData.Contact} />
    //           </>
    //         )}
    //       </>
    //     )}
    //   </div>
    // </div>
  );
};

//export default App;

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
