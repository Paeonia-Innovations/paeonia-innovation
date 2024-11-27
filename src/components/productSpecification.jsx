import React, { useEffect, useState, useRef } from "react";

export const ProductSpecification = (props) => {
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
    <div id="productSpecification" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="productTitle">
              <h3>Product Specifications</h3>
            </div>
            <div className="spacer"></div>
            <div className="productInfo">
              <table className="productTable">
                <thead>
                  <tr>
                    <th>Specification</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      specification: "Wavenumber Range",
                      detail: "900 cm⁻¹ to 1800 cm⁻¹",
                    },
                    {
                      specification: "Dimension (L x W x H) mm / Weight",
                      detail: "(50 x 55 x 60) mm / 450g",
                    },
                    { specification: "Response Time", detail: "0.3s" },
                    {
                      specification: "Pressure Rating",
                      detail: "0 to 5 bar absolute",
                    },
                    {
                      specification: "Tube Fiting",
                      detail: '1/4"- 28 flat-bottom',
                    },
                    {
                      specification: "Wetted Materials",
                      detail: "SS316L, FFKM, Si, Ge, Au",
                    },
                    {
                      specification: "Power Consumption",
                      detail: "600 mW (5V DC via USB-C)",
                    },
                    {
                      specification: "Software Operating System",
                      detail: "Microsoft Windows 10 & 11",
                    },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td>{row.specification}</td>
                      <td>{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
