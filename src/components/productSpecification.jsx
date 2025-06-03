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
                      detail: "900 cm⁻¹ to 3500 cm⁻¹",
                    },
                    // {
                    //   specification: "Dimension (L x W x H) mm / Weight",
                    //   detail: "(50 x 55 x 60) mm / 450g",
                    // },
                    {
                      specification: "Size",
                      detail: "5 cm x 5.5 cm x 6cm",
                    },
                    {
                      specification: "Weight",
                      detail: "450 g",
                    },
                    { specification: "Response Time", detail: "0.3s" },
                    {
                      specification: "Power Consumption",
                      detail: "600 mW (5V DC via USB-C)",
                    },
                    {
                      specification: "Electrical Connection",
                      detail: "Single USB-C to power device and transmit data",
                    },
                    {
                      specification: "Void Volume",
                      detail: "0.1 mL",
                    },
                    {
                      specification: "Back Pressure",
                      detail: "0.3 bar at 30 mL.min⁻¹ water flow",
                    },
                    {
                      specification: "Pressure Rating",
                      detail: "0 to 50 bar absolute",
                    },
                    {
                      specification: "Tube Fitting",
                      detail: '1/4"- 28 flat-bottom',
                    },
                    {
                      specification: "Tube Size",
                      detail: 'OD of 1/8" or 1/16"',
                    },
                    {
                      specification: "Chemicals Temperature",
                      detail: "-15°C to 60°C",
                    },
                    {
                      specification: "Ambient Temperature and Humidity",
                      detail: "0°C to 60°C; 0% RH to 90% RH",
                    },
                    {
                      specification: "Wetted Materials",
                      detail: "SS316L, FFKM, Si, Ge, Au",
                    },
                    {
                      specification: "Pathlength Options",
                      detail: "20 μm, 100 μm or 200 μm",
                    },
                    {
                      specification: "Residence Time Distribution",
                      detail:
                        "Build-in function to do residence time distribution and live concentration measurement",
                    },
                    {
                      specification: "Historical Information",
                      detail: "Immutable records of past measurements and data",
                    },
                    {
                      specification: "Self Test Function",
                      detail: "Auto test instrument signal-to-noise ratio",
                    },
                    {
                      specification: "Data Format",
                      detail: "SPC or CSV files",
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
