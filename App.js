import {Route, Routes, Link} from 'react-router';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import MeditationDetailPage from './Pages/MeditationDetailPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import MeditatingPage from './Pages/MeditatingPage';
import MeditationList from './Components/MeditationList';
import MeditationRelaxPage from './Pages/MeditationDetailPage/MeditationRelaxPage';
import MeditationMantraPage from './Pages/MeditationDetailPage/MeditationMantraPage';
import MeditationBreathingPage from './Pages/MeditationBreathingPage';


// Redux

import store from './store/index' 

function App() {
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
      </ Routes>
     
    </div>
  );
}

export default App;