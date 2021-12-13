import {Route, Routes, Link} from 'react-router';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import MeditationDetailPage from './Pages/MeditationDetailPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import MeditationList from './Components/MeditationList';
import MeditationRelaxPage from './Pages/MeditationDetailPage/MeditationRelaxPage';
import MeditationMantraPage from './Pages/MeditationDetailPage/MeditationMantraPage';
import MeditationBreathePage from './Pages/MeditationDetailPage/MeditationBreathePage';
import MeditatingBreathePage from './Pages/MeditatingPage/MeditatingBreathePage';
import MeditatingMantraPage from './Pages/MeditatingPage/MeditatingMantraPage';
import MeditatingRelaxPage from './Pages/MeditatingPage/MeditatingRelaxPage';




function App() {
  let isLoggedIn = false;

  

  return (
    <div>
    

      <Navbar />
     
      {/* <Provider store={store}>
        <MeditatingPage />
      </Provider> */}
      
      <Routes>
      <Route path = '/HomePage' element={<HomePage/>}/>
      <Route path = '/LoginPage' element={<LoginPage/>}/>
      <Route path = '/RegistrationPage' element={<RegistrationPage/>}/>
      <Route path = '/MeditationList' element = {<MeditationList/>}/>
      <Route path = '/MeditationDetailPage' element = {<MeditationDetailPage/>}/>
      
      <Route path = '/MeditationRelaxPage' element = {<MeditationRelaxPage/>}/>
      <Route path = '/MeditationMantraPage' element = {<MeditationMantraPage/>}/>
      <Route path = '/MeditationBreathePage' element = {<MeditationBreathePage/>}/>

      <Route path = '/MeditatingMantraPage' element = {<MeditatingMantraPage/>}/>
      <Route path = '/MeditatingRelaxPage' element = {<MeditatingRelaxPage/>}/>
      <Route path = '/MeditatingBreathePage' element = {<MeditatingBreathePage/>}/>
      </ Routes>
     
    </div>
  );
}

export default App;