import { useState } from "react";
import { PropsWithChildren } from "react";

export const Widget = (props: PropsWithChildren<{}>) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="widget">
      {/* Title and Logo */}
      <div className="widget__content">
        <div
          className="widget--mini"
          onClick={() => {
            setIsExpanded(true);
          }}
        >
          <img className="widget__bell-logo" src="./img/bell.svg" />
          <h5 className="widget__title">Talk to an expert</h5>
        </div>
        <div className="widget--expanded">
          {/* Customer Logo */}
          <img
            className="widget--expanded__customer-logo"
            src="./img/customer-logo.png"
          />
          {/* Customer Logo */}
          <button
            className="widget--expanded__btn-close"
            onClick={() => {
              setIsExpanded(false);
            }}
          >
            <img src="./img/icons/close.svg" />
          </button>
          <div className="widget--expanded__slide-over">
            {/* Avatars */}
            <div className="widget__avatars">
              <div className="avatar">
                <img
                  className="widget__avatar-img"
                  src="./img/avatars/avatar-1.jpeg"
                  alt="Avatar 1"
                />
              </div>
              <div className="avatar">
                <img
                  className="widget__avatar-img"
                  src="./img/avatars/avatar-2.jpeg"
                  alt="Avatar 2"
                />
              </div>
              <div className="avatar">
                <span className="widget__avatar-img">Z</span>
              </div>
              <div className="avatar">
                <img
                  className="widget__avatar-img"
                  src="./img/avatars/avatar-3.jpeg"
                  alt="Avatar 3"
                />
              </div>
            </div>
            {/* Title */}
            <h5 className="widget--expanded__title">Chat with us</h5>
            {/* CTA Section */}
            <div className="widget--expanded__ctas">
              {/* Primary CTA */}
              <button type="button" className="btn btn-primary w-full">
                <img className="btn__icon" src="./img/icons/phone.svg" />
                Call Us
              </button>
              <button type="button" className="btn btn-secondary w-full">
                <img className="btn__icon" src="./img/icons/chat.svg" />
                Chat Us
              </button>
            </div>
            {/* Help Section */}
            <div className="widget--expanded__help">
              <div className="widget--expanded__help-header">
                <h3 className="widget--expanded__help-title">
                  <img
                    className="widget--expanded__help-icon"
                    src="./img/icons/help.svg"
                  />
                  Search for help
                </h3>
                <img src="./img/icons/right-chevron.svg" />
              </div>
              <div className="widget--expanded__help-input">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="input"
                />
                <img
                  src="./img/icons/search.svg"
                  className="widget--expanded__help-input-icon"
                />
              </div>
            </div>
          </div>

          <nav className="widget--expanded__bottom-nav">
            <ul className="widget--expanded__bottom-nav-list">
              <li className="widget--expanded__bottom-nav-item">
                <a href="#" className="widget--expanded__bottom-nav-link">
                  <img
                    src="./img/icons/phone.svg"
                    className="widget--expanded__bottom-nav-icon"
                  />
                  Call Us
                </a>
              </li>
              <li className="widget--expanded__bottom-nav-item">
                <a href="#" className="widget--expanded__bottom-nav-link">
                  <img
                    src="./img/icons/chat.svg"
                    className="widget--expanded__bottom-nav-icon"
                  />
                  Chat Us
                </a>
              </li>
              <li className="widget--expanded__bottom-nav-item">
                <a href="#" className="widget--expanded__bottom-nav-link">
                  <img
                    src="./img/icons/help.svg"
                    className="widget--expanded__bottom-nav-icon"
                  />
                  Help
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Bottom Overlay */}
        <div className="widget__overlay" />
        {/* Agent Video */}
        <video
          className="widget__video"
          autoPlay
          muted
          loop
          width="100%"
          height="100%"
        >
          <source src="./img/agent.mp4" type="video/mp4" />
          <img
            src="./img/agent.png"
            title="Your browser does not support the <video> tag"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* ./widget__content */}
    </div>
  );
};
