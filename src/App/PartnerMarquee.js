import React from 'react'
import Marquee from "react-fast-marquee";
import { useTranslation } from 'react-i18next';
function PartnerMarquee({partnerData}) {
  const {partner} = partnerData
  const { t } = useTranslation();
  return (
    <div id="partner_marquee">
      <h1>{t('section_title6')}</h1>
      <br />
      <br />
      <br />
      <Marquee 
        speed={30}
        gradientColor={[0,0,0]}
      >
        <div className="marquee-content">
          {
            partner?
            partner.map((item)=>{
              return (
                <div class="marquee-item">
                  <img 
                    src={process.env.PUBLIC_URL+'/images/partner/'+item.image} alt=""
                  />
                </div>
              )
            }) : ""
          }
        </div>
        
      </Marquee>

    </div>

  )
}

export default PartnerMarquee