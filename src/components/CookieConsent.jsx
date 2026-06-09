import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import "../css/CookieConsent.css";

const STORAGE_KEY = "paeonia_cookie_consent";
const GA_MEASUREMENT_ID = "G-7HL3JE38E2"; // Replace with your actual GA4 Measurement ID

const initAnalytics = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

const defaultPreferences = {
  necessary: true,
  analytics: false,
  functional: false,
};

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState(defaultPreferences);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setVisible(true);
    } else {
      const parsed = JSON.parse(saved);
      if (parsed.analytics) initAnalytics();
    }
  }, []);

  const save = (preferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    if (preferences.analytics) initAnalytics();
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    save({ necessary: true, analytics: true, functional: true });
  };

  const rejectAll = () => {
    save({ necessary: true, analytics: false, functional: false });
  };

  const saveCustom = () => {
    save(prefs);
  };

  const toggle = (key) => {
    if (key === "necessary") return;
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  if (!visible) return null;

  return (
    <>
      {/* Overlay backdrop when settings open */}
      {showSettings && (
        <div
          className="cookie-overlay"
          onClick={() => setShowSettings(false)}
        />
      )}

      {/* Settings modal */}
      {showSettings && (
        <div
          className="cookie-settings-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Cookie settings"
        >
          <div className="cookie-settings-header">
            <h3>Cookie Preferences</h3>
            <button
              className="cookie-close-btn"
              onClick={() => setShowSettings(false)}
              aria-label="Close settings"
            >
              ×
            </button>
          </div>

          <p className="cookie-settings-desc">
            We use cookies to improve your experience on our website. You can
            choose which categories to allow below. For more information, see
            our Privacy Policy.
          </p>

          <div className="cookie-category">
            <div className="cookie-category-info">
              <span className="cookie-category-name">Necessary</span>
              <span className="cookie-category-desc">
                Required for the website to function. Cannot be disabled.
              </span>
            </div>
            <div
              className="cookie-toggle always-on"
              aria-label="Always enabled"
            >
              <span className="cookie-toggle-label">Always On</span>
            </div>
          </div>

          <div className="cookie-category">
            <div className="cookie-category-info">
              <span className="cookie-category-name">Analytics</span>
              <span className="cookie-category-desc">
                Help us understand how visitors use our site so we can improve
                it.
              </span>
            </div>
            <button
              role="switch"
              aria-checked={prefs.analytics}
              className={`cookie-toggle-btn-switch ${prefs.analytics ? "on" : "off"}`}
              onClick={() => toggle("analytics")}
            >
              <span className="cookie-toggle-thumb" />
            </button>
          </div>

          <div className="cookie-category">
            <div className="cookie-category-info">
              <span className="cookie-category-name">Functional</span>
              <span className="cookie-category-desc">
                Remember your preferences such as language or region.
              </span>
            </div>
            <button
              role="switch"
              aria-checked={prefs.functional}
              className={`cookie-toggle-btn-switch ${prefs.functional ? "on" : "off"}`}
              onClick={() => toggle("functional")}
            >
              <span className="cookie-toggle-thumb" />
            </button>
          </div>

          <div className="cookie-settings-actions">
            <button
              className="cookie-btn cookie-btn-outline"
              onClick={rejectAll}
            >
              Reject All
            </button>
            <button
              className="cookie-btn cookie-btn-primary"
              onClick={saveCustom}
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}

      {/* Bottom banner */}
      {!showSettings && (
        <div
          className="cookie-banner"
          role="region"
          aria-label="Cookie consent"
        >
          <div className="cookie-banner-text">
            <strong>We value your privacy</strong>
            <p>
              We use cookies to improve your browsing experience, analyze
              website traffic, and understand how visitors interact with our
              website.
            </p>
          </div>
          <div className="cookie-banner-actions">
            <button
              className="cookie-btn cookie-btn-ghost"
              onClick={() => setShowSettings(true)}
            >
              Manage Preferences
            </button>
            <div className="cookie-banner-actions-right">
              <button
                className="cookie-btn cookie-btn-outline"
                onClick={rejectAll}
              >
                Reject All
              </button>
              <button
                className="cookie-btn cookie-btn-primary"
                onClick={acceptAll}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const getCookiePreferences = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : null;
};
