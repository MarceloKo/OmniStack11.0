import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';


export default function Routess() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Logon />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/incidents/new" element={<NewIncident />} />

            </Routes>
        </Router>
    );
}






