import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logon from './pages/Logon';

export default function Routess() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Logon />} />
            </Routes>
        </Router>
    );
}






