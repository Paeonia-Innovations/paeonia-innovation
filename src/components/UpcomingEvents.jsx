import React from "react";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    id: 7,
    title: "Flow-Compatible Mid-IR PAT for Biopharma Manufacturing",
    subtitle:
      "Paeonia Innovations joins Mini-APACT 2026, hosted by CPACT at AstraZeneca's Macclesfield site, for two days covering advanced process analytics, modelling and control across pharma, biotech, chemicals and food.",
    image: "img/portfolio/Mini_APACT_Logo.png",
    imageFit: "contain",
    location: "AstraZeneca, Charter Way, Macclesfield SK10 2NA, UK",
    date: "Thu 24 – Fri 25 September 2026",
    booth: "Talk: Fri 25 Sept, 3:40–4:05pm · Theme 4: Biopharma PACT",
    internalLink: "/Mini-APACT-2026",
    externalLink:
      "https://www.cpact.com/News/id/1429/apact-conference-mini-apact-programme-announced",
    externalLinkLabel: "Mini-APACT 2026 Programme",
    talkInfo:
      '🎤 Live Talk at the Conference\n"Flow-Compatible Mid-IR PAT: From Optically Dense Process Streams to Biopharmaceutical Continuous Manufacturing"\nDr. Lennon Lee, CEO, Paeonia Innovations',
  },
  {
    id: 8,
    title: "Live OrionIR™ Demo — RTD, Reaction Monitoring & Process Control",
    subtitle:
      "Paeonia Innovations exhibits at Flow Chemistry India 2026, hosted by the Flow Chemistry Society in Hyderabad, with a live OrionIR™ product demo at our booth alongside our India partner AmAr/Spectrasolve.",
    image: "img/portfolio/FlowChemistryIndia2026.jpeg",
    location: "Avasa Hotel, Madhapur, Hyderabad, India",
    date: "Thu 10 – Fri 11 September 2026",
    booth: "Live Product Demo · With AmAr & Spectrasolve",
    internalLink: "/Flow-Chemistry-India-2026",
    externalLink: "https://glostem.in/conference/fci-2026",
    externalLinkLabel: "Flow Chemistry India 2026",
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
  {
    id: 3,
    title: "BIO Asia-Taiwan 2026",
    subtitle:
      "Engage with cutting-edge developments in bioprocess analytics, molecular sensing, and photonics-driven life science applications.",
    image: "img/portfolio/BIO Asai-Taiwan.jpg",
    location: "Taipei Nangang Exhibition Center, Hall 1, 4F",
    date: "July 16 (Thur.) – 19 (Sun.) 2026",
    booth: "Overseas Pavilion, Booth L326",
    externalLink: "https://www.bioasiataiwan.com",
  },
  {
    id: 4,
    title: "Do You Know When Your Batch Is Truly Done?",
    subtitle:
      "Real-Time Mid-IR for Chemistry-Driven Process Control — a live 45-minute webinar for chemical, pharma & cosmetics manufacturers, with live Q&A.",
    image: "img/portfolio/PAT_INDUSTRY.png",
    location: "Live Webinar (Livestorm)",
    date: "Tuesday, 22 July 2026 | 9:00 AM CEST (Paris)",
    booth: null,
    externalLink:
      "https://app.livestorm.co/p/097fafea-82fb-4174-b925-7eae5163de53",
  },
  {
    id: 5,
    title: "Advanced Seminar on Flow Synthesis — Osaka, Japan",
    subtitle:
      "Explore AI chemometrics and palm-sized Mid-IR spectroscopy for real-time flow chemistry, organised by Horizo Inc and ALCOM.",
    image: "img/portfolio/Alcom.png",
    location: "Osaka Science and Technology Center, Osaka, Japan",
    date: "Thursday, 30 July 2026 | 16:40 – 17:10 (JST)",
    booth: null,
    externalLink:
      "https://horizo.co.jp/ja/blog/flow-reaction-nmr_analysis-ai-seminar-2026",
  },
  {
    id: 6,
    title: "GRAMS 40th Public Lecture — Osaka, Japan",
    subtitle:
      "Group for Research on Automated Flow and Microreactor Synthesis (Kinki Chemical Society) — lectures and exhibition, open to general participants.",
    image: "img/portfolio/GRAM-card.png",
    location: "Osaka Science and Technology Center, Osaka, Japan",
    date: "Friday, 31 July 2026 | 10:00 – 17:45 (JST)",
    booth: null,
    externalLink: "https://flowmicro.com/meeting/meeting113_40op.html",
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
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
              <div
                className={`ue-card-img-wrap${
                  event.imageFit === "contain"
                    ? " ue-card-img-wrap-contain"
                    : ""
                }`}
              >
                {event.visual === "pat-banner" ? (
                  <div className="ue-pat-visual">
                    <span className="ue-pat-eyebrow">
                      PAT-INDUSTRY invites you to their event
                    </span>
                    <div className="ue-pat-logo-chip">
                      <img
                        src="/PI logo nows.svg"
                        alt="Paeonia Innovations"
                        className="ue-pat-logo"
                      />
                    </div>
                    <span className="ue-pat-heading">
                      Do You Know When Your Batch Is Truly Done?
                      <br />
                      Real-Time Mid-IR for Chemistry-Driven Process Control
                    </span>
                  </div>
                ) : (
                  <img
                    src={event.image}
                    alt={event.title}
                    className={`ue-card-img${
                      event.imageFit === "contain" ? " ue-card-img-contain" : ""
                    }`}
                  />
                )}
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
                      {event.talkInfo
                        .split("\n")[2]
                        .split(" · ")
                        .map((speaker, i) => (
                          <React.Fragment key={i}>
                            {i > 0 && <br />}
                            {speaker}
                          </React.Fragment>
                        ))}
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
