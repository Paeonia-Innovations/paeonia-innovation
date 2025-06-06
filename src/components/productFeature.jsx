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

  return (
    <div id="productFeature" className="text-center">
      <div className="container">
        <div className={`col-12 col-md-6`} ref={ref}>
          <div className="products">
            <h3>Featured Products</h3>

            <div className={`feature-box ${inView ? "fadeInUp" : ""}`}>
              <div className="img-container mb-3">
                <img
                  src="img/portfolio/ReactionMonitoring.png"
                  className="img-responsive"
                  alt="Reaction Monitoring"
                  style={{ cursor: "pointer", maxWidth: "100%" }}
                  onClick={goToReactionMonitoring}
                />
              </div>

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
  );
};
