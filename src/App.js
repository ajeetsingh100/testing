import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SubmenuContent from './components/SubmenuContent';
import NavigationBar from './components/NavigationBar';
import TopHeader from './components/common/TopHeader';
import AboutDoctor from './components/AboutDoctor';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/common/Footer';






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
          <Route path='/surgeries&treatments/:searchedKeyword' element={<SubmenuContent/>}/> 
          <Route path='/gallery/:searchedKeyword' element={<Gallery/>}/>   
        </Routes>
        <Footer/>
    </div>

  );
}

export default App;
