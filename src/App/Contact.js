import React from 'react'
import { GoogleMap, LoadScript ,Marker} from '@react-google-maps/api';
function Contact() {
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
    lat: 25.051027,
    lng: 121.594860
  };
  return (
    <section id="contact">
      <h1>聯絡我們</h1>
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
                lat: 25.051027,
                lng: 121.594860
              }}
              icon={process.env.PUBLIC_URL + '/img/2022/MS_landmark.svg'}
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
              <p>02-2785-7037</p>
          </div>
          <div className="infoContent width1">
              <p>Email</p>
              <p>info@moonshine.tw</p>
          </div>
          <div className="infoContent width2">
              <p>Address</p>
              <p>3F, No.481, Sec. 6, Zhongxiao E. Rd., Nangang Dist., Taipei City 115, Taiwan (R.O.C.)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact