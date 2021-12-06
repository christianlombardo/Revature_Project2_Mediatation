import {Route, Routes, Link} from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import MeditaionDetailPage from './Pages/MeditationDetailPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import MantraPageHeader from './Pages/MeditationDetailPage/MantraPageHeader';

function App() {
  return (



    
    <div>
      
      <Navbar />
      <Routes>
      <Route path = '/HomePage' element={<HomePage/>}/>
      <Route path = '/LoginPage' element={<LoginPage/>}/>
      <Route path = '/RegistrationPage' element={<RegistrationPage/>}/>
      </ Routes>
    </div>
  );
}

export default App;
