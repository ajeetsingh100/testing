import logo from './logo.svg';
import './App.css';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DoctorAtGlance from './components/DoctorAtGlance';
import OurSpeciality from './components/OurSpeciality';
import BookAppointment from './components/BookAppointment';
import OurSpecialists from './components/OurSpecialist';
import Statistics from './components/Statistics';
import VideosSection from './components/VideoSection';
import Testimonials from './components/Testimonial';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';





function App() {
  return (
    <div className="App">
      <TopHeader/>
      <Navbar/>
      <HeroSection/>
      <DoctorAtGlance/>
      <OurSpeciality/>
      <BookAppointment/>
      <OurSpecialists/>
      <Statistics/>
      <VideosSection/>
      <Testimonials/>
      <BlogSection/>
      <Footer/>
    </div>
  );
}

export default App;
