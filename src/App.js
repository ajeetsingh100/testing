import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SubmenuContent from './components/SubmenuContent';
import NavigationBar from './components/NavigationBar';
import TopHeader from './components/TopHeader';





function App() {
  return (
    <div className="App">
      <TopHeader/>
      <NavigationBar/>
        <Routes>
          <Route index element={<Homepage/>}/>             
          <Route path='/surgeries&treatments/:searchedKeyword' element={<SubmenuContent/>}/>    
        </Routes>
      
    </div>
  );
}

export default App;
