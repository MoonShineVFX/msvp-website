import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
function MobilePagesNavbar({ data, isToggled, switchToggle }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const handleLinkClick = (event) => {
    switchToggle();
  };
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { pathname } = useLocation();
  return (
    <div className={isToggled ? "mobile_navlist active" : "mobile_navlist"}>
      <ul>
        {data &&
          data.map((item, index) => (
            <li key={index}>
              {(() => {
                switch (item.type) {
                  case "external":
                    return (
                      <a
                        href={item.href}
                        target="_blank"
                        className={
                          pathname.substring(1) === item.type ? "active" : ""
                        }
                      >
                        {t(`${item.chtName}`)}
                      </a>
                    );
                  case "internal":
                    return (
                      <Link
                        to={item.href}
                        className={
                          pathname.substring(1) === item.type ? "active" : ""
                        }
                      >
                        {t(`${item.chtName}`)}
                      </Link>
                    );
                  case "scroll":
                    return (
                      <div
                        onClick={() => scrollToElement(item.href)}
                        className={
                          pathname.substring(1) === item.type ? "active" : ""
                        }
                      >
                        {t(`${item.chtName}`)}
                      </div>
                    );
                  default:
                    return null;
                }
              })()}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MobilePagesNavbar;
