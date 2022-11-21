import React,{useState,useEffect} from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './index.scss'
import './mobileIndex.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos'
import 'aos/dist/aos.css'

import PublicPageLayout from '../Layouts/PublicPageLayout'
import DashboardPageLayout from '../Layouts/DashboardPageLayout'
import { AuthProvider } from "../Components/Auth";
import PublicRoutes from '../Routes/PublicRoutes'
import ProtectedRoutes from '../Routes/ProtectedRoutes'
//login
import Login from '../Components/Login'

//pages
import Home from '../Pages/Home'
import About from '../Pages/About/About'
import Services from '../Pages/Services/Services';
import Education from '../Pages/Education/Education';

//back pages
import AdminHome from '../Pages/Back/Home'
import AdminCategory from '../Pages/Back/Category'
import AdminStudentWorks from '../Pages/Back/Edu/Home'
import AdminAbout from '../Pages/Back/About/Home'
import AdminTeam from '../Pages/Back/About/Category'

//ga
import ReactGA from 'react-ga';
ReactGA.initialize('G-JDQXN9LTQ7');


function App() {

  const [isToggled, setToggled] = useState(false);
  const [isScorllEnd, setISScorllEnd]= useState(false)
  const toggleTrueFalse = () => setToggled(!isToggled);
  const switchToggle = event => {
    setToggled(!isToggled)
  };


  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])


  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<PublicPageLayout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="education" element={<Education />} />
        </Route>
        
        <Route path="admin" element={<ProtectedRoutes />}>
          <Route path="" element={<AdminHome />} />
          <Route path="category" element={<AdminCategory />} />
          <Route path="studentwork" element={<AdminStudentWorks />} />
          <Route path="about" element={<AdminAbout />} />
          <Route path="team" element={<AdminTeam />} />

        </Route>
        <Route path="login" element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
