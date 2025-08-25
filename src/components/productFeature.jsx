import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const ProductFeature = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > elementPosition + 100) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToReactionMonitoring = () => {
    navigate("/reaction-monitoring");
  };

  // const goToRTD = () => {
  //   navigate("/rtd");
  // }; comment out for now RTD

  return (
    <div id="productFeature" className="text-center">
      <div className="container">
        {/* Title for Featured Products */}
        <h3>Featured Products</h3>

        <div className="row">
          {/* Reaction Monitoring Product */}
          <div className="col-12 col-md-4">
            <div className="products">
              <div className={`feature-box ${inView ? "fadeInUp" : ""}`}>
                <div className="product-item">
                  <div className="img-container mb-3">
                    <img
                      src="img/portfolio/ReactionMonitoring.png"
                      className="img-responsive"
                      alt="Reaction Monitoring"
                      onClick={goToReactionMonitoring}
                    />
                  </div>
                  <div className="text-container">
                    <h4
                      style={{
                        cursor: "pointer",
                        color: "#fff",
                        textDecoration: "underline",
                      }}
                      onClick={goToReactionMonitoring}
                    >
                      Reaction Monitoring
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RTD Product */}
          {/* <div className="col-12 col-md-4">
            <div className="products">
              <div className={`feature-box ${inView ? "fadeInUp" : ""}`}>
                <div className="product-item">
                  <div className="img-container mb-3">
                    <img
                      src="img/portfolio/RTD.png"
                      className="img-responsive"
                      alt="RTD"
                      onClick={goToRTD}
                    />
                  </div>
                  <div className="text-container">
                    <h4
                      style={{
                        cursor: "pointer",
                        color: "#fff",
                        textDecoration: "underline",
                      }}
                      onClick={goToRTD}
                    >
                      Residence Time Distribution (RTD)
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
