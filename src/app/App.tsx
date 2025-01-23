import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@pages/Home/Home';
import PortfolioPage from '@pages/Portfolio/Portfolio';
import StorePage from '@pages/Store/StorePage';
import '@app/App.css';

const LazyPortfolio = lazy(() => Promise.resolve({ default: PortfolioPage }));
const LazyStore = lazy(() => Promise.resolve({ default: StorePage }));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<LazyPortfolio />} />
          <Route path="/store" element={<LazyStore />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;