import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

import NavigationBar from './components/NavigationBar';
import TopHeader from './components/common/TopHeader';
import AboutDoctor from './components/AboutDoctor';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/common/Footer';
import SurgeriesAndTreatment from './components/SurgeriesAndTreatement/SurgeriesAndTreatment';
import DiseasesWeTreat from './components/DiseasesWeTreat/DiseasesWeTreat';
import RareCases from './components/Patient Information/RareCases';
import VideoTestimonial from './components/VideoTestimonial/VideoTestimonial';
import ContactUs from './components/ContactUs';






function App() {
  return (
    <div className="App">
     <div className='sticky-top'>
       <TopHeader/>
      <NavigationBar/>
     </div>
        <Routes>
          <Route index element={<Homepage/>}/>             
          <Route path='/about' element={<AboutDoctor/>}/>
          <Route path='/surgeries&treatments/:searchedKeyword' element={<SurgeriesAndTreatment/>}/> 
          <Route path='/gallery/:searchedKeyword' element={<Gallery/>}/>   
          <Route path='/diseases-we-treat/:searchedKeyword1/:searchedKeyword2' element={<DiseasesWeTreat/>}/>   
          <Route path='/patient-information/:searchedKeyword' element={<RareCases/>}/>
          <Route path='/testimonial/:searchedKeyword' element={<VideoTestimonial/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
    </div>

  );
}

export default App;
