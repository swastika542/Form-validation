import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormComponent from './components/FormComponent';
import SuccessComponent from './components/SuccessComponent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/success" element={<SuccessComponent />} />
      </Routes>
    </Router>
  );
};

export default App;