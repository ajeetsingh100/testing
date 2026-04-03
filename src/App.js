import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SubmenuContent from './components/SubmenuContent';
import NavigationBar from './components/NavigationBar';
import TopHeader from './components/common/TopHeader';
import AboutDoctor from './components/AboutDoctor';






function App() {
  return (
    <div className="App">
      <TopHeader/>
      <NavigationBar/>
        <Routes>
          <Route index element={<Homepage/>}/>             
          <Route path='/about' element={<AboutDoctor/>}/>
          <Route path='/surgeries&treatments/:searchedKeyword' element={<SubmenuContent/>}/>    
        </Routes>
      
    </div>
  );
}

export default App;
