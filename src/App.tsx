import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import SectorShowcase from './components/SectorShowcase';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import SubscriptionPlans from './components/SubscriptionPlans';
import Dashboard from './components/Dashboard';
import Extras from './components/Extras';
import Welcome from './components/Welcome';
import AssetSafetyManagement from './components/AssetSafetyManagement';

const HomePage: React.FC = () => (
  <>
    <Welcome />
    <HowItWorks id="how-it-works" />
    <SectorShowcase id="sectors" />
    <SubscriptionPlans id="plans" />
    <Dashboard id="dashboard" />
    <Extras id="extras" />
    <FAQ id="faq" />
    <ContactForm id="contact" />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow pt-20"> {/* Added padding-top here */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/asset-safety" element={<AssetSafetyManagement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;