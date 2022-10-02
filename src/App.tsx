import * as React from 'react';
import JoinMeet from './components/JoinMeet';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import VerifyYourAge from './pages/VerifyYourAge';
import { Routes, Route, Link } from "react-router-dom";
import JoinMeetPage from './pages/JoinMeetPage';
import SignUpPage from './pages/SignUpPage';

export default function BasicButtons() {
  return (
    <div className="App">
      <Routes>
        <Route path="/join-meet" element={<JoinMeetPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<VerifyYourAge />} />
      </Routes>
    </div>
  );
}
