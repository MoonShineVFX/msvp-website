import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
function MobilePagesNavbar({ data, isToggled, switchToggle }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
      console.log(`成功滾動到元素: ${id}`);
    } else {
      console.log(`找不到元素: ${id}`);
      // 如果找不到元素，嘗試滾動到頁面頂部
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScrollClick = (href) => {
    if (pathname !== "/") {
      // 如果不在首頁，先導航到首頁
      navigate("/");
      // 等待頁面載入完成後再滾動
      setTimeout(() => {
        scrollToElement(href);
      }, 500);
    } else {
      // 如果已在首頁，直接滾動
      scrollToElement(href);
    }
    // 關閉移動選單
    switchToggle();
  };
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
                        onClick={(e) => {
                          if (item.href === "/") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                          // 關閉移動選單
                          switchToggle();
                        }}
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
                        onClick={() => handleScrollClick(item.href)}
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
