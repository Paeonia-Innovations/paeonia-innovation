import React from "react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Laser World of Photonics China 2026",
    subtitle:
      "Engage with the latest advancements in lasers, optics, optoelectronics, and photonics technologies.",
    image: "img/portfolio/K2Photonics.png",
    location: "Shanghai New International Expo Centre (SNIEC), Shanghai, China",
    date: "18–20 March 2026",
    booth: "Booth N3.3651",
    externalLink:
      "https://www.world-of-photonics-china.com.cn/en/trade-fair/index.html",
    registerExternal: "https://wj.qq.com/s2/25760178/d86b/",
    formLink: null,
    //formLink: "/laser-world-event",
  },
  {
    id: 2,
    title: "Flow Chemistry Asia 2026",
    subtitle:
      "Engage with cutting-edge developments in continuous flow chemistry, microreactors, process intensification, and industrial applications.",
    image: "img/portfolio/FlowChemistry.png",
    location: "NAIVE S Hotel (Vanke Cloud City) Xili, Shenzhen, China",
    date: "6–7 June 2026",
    booth: null,
    externalLink: "https://www.selectbioconferences.com/fcshenzhen2026",
    registerExternal: null,
    formLink: "/form",
  },
];

export const UpcomingEvents = () => {
  return (
    <section id="upcomingEvents">
      <div className="ue-hero">
        <div className="ue-hero-inner">
          <span className="ue-eyebrow">Where We'll Be</span>
          <h1 className="ue-title">Upcoming Events</h1>
          <p className="ue-desc">
            Meet the Paeonia Innovations team at these industry-leading events
            across Asia.
          </p>
        </div>
        <div className="ue-hero-line" />
      </div>

      <div className="ue-grid-wrapper">
        <div className="ue-grid">
          {events.map((event) => (
            <div className="ue-card" key={event.id}>
              <div className="ue-card-img-wrap">
                <img
                  src={event.image}
                  alt={event.title}
                  className="ue-card-img"
                />
                <span
                  className="ue-card-tag"
                  style={{ background: event.tagColor }}
                >
                  {event.tag}
                </span>
              </div>

              <div className="ue-card-body">
                <a
                  href={event.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ue-card-title"
                >
                  {event.title}
                </a>
                <p className="ue-card-subtitle">{event.subtitle}</p>

                <div className="ue-card-meta">
                  <div className="ue-meta-row">
                    <span className="ue-meta-icon">📍</span>
                    <span className="ue-meta-text">{event.location}</span>
                  </div>
                  <div className="ue-meta-row">
                    <span className="ue-meta-icon">🗓</span>
                    <span className="ue-meta-text">{event.date}</span>
                  </div>
                  {event.booth && (
                    <div className="ue-meta-row">
                      <span className="ue-meta-icon">📌</span>
                      <span className="ue-meta-text ue-booth">
                        {event.booth}
                      </span>
                    </div>
                  )}
                </div>

                {/* ── Two buttons side by side ── */}
                <div className="ue-card-actions">
                  <a
                    href={event.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ue-card-btn ue-btn-solid"
                  >
                    Learn More →
                  </a>
                  {/* <Link
                    to={event.formLink}
                    className="ue-card-btn ue-btn-outline"
                  >
                    Register Interest
                  </Link> */}
                  {event.registerExternal ? (
                    <a
                      href={event.registerExternal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ue-card-btn ue-btn-outline"
                    >
                      Register Interest
                    </a>
                  ) : (
                    <Link
                      to={event.formLink}
                      className="ue-card-btn ue-btn-outline"
                    >
                      Register Interest
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
