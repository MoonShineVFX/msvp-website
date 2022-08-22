import React, { useState }  from 'react'
import { Outlet} from 'react-router-dom';


import PagesNavbar from '../Components/PagesNavbar'
import MobilePagesNavbar from '../Components/MobilePagesNavbar';
import Footer from '../Components/Footer'

import NavData from '../Components/PagesNavbar.json'
import { RecoilRoot } from 'recoil';




function PublicPageLayout() {
  const {navbar} =NavData
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  return (
    <React.Fragment>
      <RecoilRoot>
        <PagesNavbar data={navbar} toggleTrueFalse={toggleTrueFalse}/>
        <MobilePagesNavbar data={navbar} isToggled={isToggled}/>
        <Outlet />
        <Footer />
      </RecoilRoot>
    </React.Fragment>
  )
}

export default PublicPageLayout