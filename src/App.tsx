import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import Features from './pages/Features';
import Documentation from './pages/Documentation';
import TechnicalFeasibility from './pages/TechnicalFeasibility';
import SecurityCompliance from './pages/SecurityCompliance';
import UserGuide from './pages/UserGuide';
import TestPlan from './pages/TestPlan';
import RiskAssessment from './pages/RiskAssessment';
import MaintenanceRoadmap from './pages/MaintenanceRoadmap';
import GettingStarted from './pages/GettingStarted';
import APIReference from './pages/APIReference';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/features" element={<Features />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/technical-feasibility" element={<TechnicalFeasibility />} />
          <Route path="/security-compliance" element={<SecurityCompliance />} />
          <Route path="/user-guide" element={<UserGuide />} />
          <Route path="/test-plan" element={<TestPlan />} />
          <Route path="/risk-assessment" element={<RiskAssessment />} />
          <Route path="/maintenance-roadmap" element={<MaintenanceRoadmap />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/api-reference" element={<APIReference />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;