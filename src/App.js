import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import ProfileListing from './ProfileListing';
import ProfileDetail from './ProfileDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/profile" element={<ProfileListing />} />
        <Route path="/profile/:id" element={<ProfileDetail />} />

      </Routes>
    </Router>
  );
};

export default App;
