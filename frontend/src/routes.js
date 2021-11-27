import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';

export default function Routess() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Logon />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}






