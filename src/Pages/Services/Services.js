import React from "react";
import ServicesAbout from "./ServicesAbout";
import Technology from "./Technology";

import techData from "../../App/techArray.json";
import aboutjsonData from "../../App/about.json";
function Services() {
  return (
    <div id="Pages_services">
      <div
        className="pageHeader"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/service/service01.jpg"
          })`,
        }}
      ></div>
      <ServicesAbout aboutData={aboutjsonData} />
      <Technology techData={techData} />
    </div>
  );
}

export default Services;
