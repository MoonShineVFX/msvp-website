import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
function Technology({ techData }) {
  const [currentId, setCurrentId] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // 如果 0.05 秒內影片就準備好，就不要顯示讀取 GIF，以免一直閃
  const [triggerNotLoaded, setTriggerNotLoaded] = useState(null);
  useEffect(() => {
    if (!triggerNotLoaded) return;
    const tid = setTimeout(() => {
      if (triggerNotLoaded) setLoaded(false);
      setTriggerNotLoaded(false);
    }, 50);
    return () => clearTimeout(tid);
  }, [triggerNotLoaded]);

  const { t } = useTranslation();
  const { tech } = techData;
  const handleClick = (index) => {
    setCurrentId(index);
    setTriggerNotLoaded(true);
    // handler(dataId)
  };

  const handleVideoLoaded = () => {
    console.debug("video loaded");
    setTriggerNotLoaded(false);
    setLoaded(true);
  };
  return (
    <section id="technology">
      <h1>{t("section_title5")}</h1>
      <div className="technology_content">
        <div className="technology_list">
          <ul>
            {techData
              ? tech.map((item, index) => {
                  const { id, title, desc, filename } = item;
                  return (
                    <li
                      key={index}
                      onClick={() => handleClick(index)}
                      className={currentId === index ? "active" : ""}
                    >
                      {t(`${title}`)}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
        <div className="technology_view">
          {techData
            ? tech.map((item, index) => {
                const { id, title, desc, filename } = item;
                const isActive = currentId === index;

                if (!isActive) return null;

                return (
                  <div
                    className="technology_gif"
                    key={id}
                    style={{
                      display: loaded ? "block" : "none",
                      width: "100%",
                      aspectRatio: 16 / 9,
                    }}
                  >
                    <video
                      preload={"auto"}
                      autoPlay
                      loop
                      muted={true}
                      onCanPlayThrough={handleVideoLoaded}
                      playsInline
                    >
                      <source
                        src={
                          process.env.PUBLIC_URL +
                          "/images/tech/" +
                          filename +
                          ".mp4"
                        }
                        type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                      />
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/tech/" +
                          filename +
                          ".jpg"
                        }
                        alt={desc}
                      />
                    </video>
                  </div>
                );
              })
            : null}
          {!loaded && (
            <div
              style={{
                width: "100%",
                aspectRatio: 16 / 9,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/loading.gif"}
                alt=""
              />
            </div>
          )}

          <div className="caption">
            <div className="title">{t(`${tech[currentId].title}`)}</div>
            <div className="desc">{t(`${tech[currentId].desc}`)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
