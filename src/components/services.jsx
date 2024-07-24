import React, { useEffect, useState, useRef } from "react";

export const Services = (props) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > elementPosition + 100) {
          // Adjust threshold as needed
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          {/* <h2>Our Services</h2> */}
          <p className={`fade-in-up ${inView ? "animated" : ""}`}>
            At Paeonia Innovations, we specialize in innovative services crafted
            to suit our clients' needs. With our expertise in semiconductors,
            AI, and chemistry, we deliver cutting-edge solutions for diverse
            challenges in chemical analysis and beyond. Explore our services.
          </p>
        </div>
        <div className="row" ref={ref}>
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className={`col-md-4 fade-in-up ${inView ? "animated" : ""}`}
                >
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
