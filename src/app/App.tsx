import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@pages/Home/Home';
import PortfolioPage from '@pages/Portfolio/Portfolio';
import StorePage from '@pages/Store/StorePage';
import StarsPage from '@pages/Stars/Stars';
import ListingPage from '@pages/Listing/Listing';
import '@app/App.css';

const LazyPortfolio = lazy(() => Promise.resolve({ default: PortfolioPage }));
const LazyStore = lazy(() => Promise.resolve({ default: StorePage }));
const LazyStars = lazy(() => Promise.resolve({ default: StarsPage }));
const LazyListing = lazy(() => Promise.resolve({ default: ListingPage }));

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<LazyPortfolio />} />
            <Route path="/store" element={<LazyStore />} />
            <Route path="/stars" element={<LazyStars />} />
            <Route path="/listing" element={<LazyListing />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;