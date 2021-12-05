import React from 'react'
import Navbar from '../../Components/Navbar'
import RegistrationPage from '../RegistrationPage';
import LoginPage from '../LoginPage';
import MeditationListPage from '../MeditationListPage';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <RegistrationPage />
            <MeditationListPage />
        </div>
    )
}

export default HomePage;
