import React from "react";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    id: 3,
    title: "BIO Asia-Taiwan 2026",
    subtitle:
      "Engage with cutting-edge developments in bioprocess analytics, molecular sensing, and photonics-driven life science applications.",
    image: "img/portfolio/BIO Asai-Taiwan.jpg",
    location: "Taipei Nangang Exhibition Center, Hall 1, 4F",
    date: "July 16 (Thur.) – 19 (Sun.) 2026",
    booth: "Overseas Pavilion, Booth L326",
    internalLink: "/BioAsia-Taiwan",
    externalLink: "https://www.bioasiataiwan.com",
    externalLinkLabel: "BIO Asia-Taiwan Exhibition 2026",
    talkInfo: "🎤 Live Talk at the Booth\n\"0.3 Seconds to a Decision: Live Mid-IR Process Monitoring at the Booth\"\nDr. Lennon Lee, CEO, Paeonia Innovations",
  },
];

const pastEvents = [
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
  },
];

const EventCard = ({ event, isPast }) => (
  <div className={`ue-card${isPast ? " ue-card-past" : ""}`}>
    <div className="ue-card-img-wrap">
      <img src={event.image} alt={event.title} className="ue-card-img" />
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
            <span className="ue-meta-text ue-booth">{event.booth}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

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

      {/* Upcoming Events */}
      <div className="ue-grid-wrapper">
        <div className="ue-grid">
          {upcomingEvents.map((event) => (
            <div className="ue-card" key={event.id}>
              <div className="ue-card-img-wrap">
                <img
                  src={event.image}
                  alt={event.title}
                  className="ue-card-img"
                />
              </div>

              <div className="ue-card-body">
                <Link to={event.internalLink} className="ue-card-title">
                  {event.title}
                </Link>
                <p className="ue-card-subtitle">{event.subtitle}</p>

                {event.talkInfo && (
                  <div className="ue-card-talk-block">
                    <span className="ue-card-talk-label">
                      {event.talkInfo.split("\n")[0]}
                    </span>
                    <span className="ue-card-talk-title">
                      {event.talkInfo.split("\n")[1]}
                    </span>
                    <span className="ue-card-talk-speaker">
                      {event.talkInfo.split("\n")[2]}
                    </span>
                  </div>
                )}

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

                <div className="ue-card-actions">
                  <Link
                    to={event.internalLink}
                    className="ue-card-btn ue-btn-solid"
                  >
                    Learn More →
                  </Link>
                </div>
                {event.externalLink && (
                  <div className="ue-card-ext-link">
                    <a
                      href={event.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ep-ext-link"
                    >
                      {event.externalLinkLabel} →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div className="ue-past-section">
        <div className="ue-past-header">
          <h2 className="ue-past-title">Past Events</h2>
          <div className="ue-hero-line" />
        </div>
        <div className="ue-grid-wrapper">
          <div className="ue-grid">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
