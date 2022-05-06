import React from 'react'
import { GoogleMap, LoadScript ,Marker} from '@react-google-maps/api';
import { useTranslation } from 'react-i18next';
function Contact() {
  const { t } = useTranslation();
  const containerStyle = {
    width: '100%',
    height: '320px',
  };
  // 地圖樣式
  const styles =[
    {
      "stylers": [
          {
              "hue": "#ff1a00"
          },
          {
              "invert_lightness": true
          },
          {
              "saturation": -100
          },
          {
              "lightness": 33
          },
          {
              "gamma": 0.5
          }
        ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#2D333C"
              }
          ]
      }
  ]
  const center = {
    lat: 25.062570,
    lng: 121.643650
  };
  return (
    <section id="contact">
      <h1>{t('section_title7')}</h1>
      <div id="map" className="mt30">
        <LoadScript
          googleMapsApiKey="AIzaSyCY5JQ3g9D70gnfALdxc8z18XD7AtNw3wM"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
            options={{
              disableDefaultUI: true,
              styles: styles,
            }}
          >
            <Marker 
              position={{
                lat: 25.062570,
                lng: 121.643650
              }}
            />
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="contact_info">
        <div className="infoArea">
          <div className="infoContent width1">
              <p>Tel</p>
              <p>+886-2-27857037</p>
          </div>
          <div className="infoContent width1">
              <p>Email</p>
              <p>info@moonshine.tw</p>
          </div>
          <div className="infoContent width2">
              <p>Address</p>
              <p>{t('address')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact