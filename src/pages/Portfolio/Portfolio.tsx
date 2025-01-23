import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Portfolio as PortfolioFeature } from '@features/Portfolio/ui/Portfolio';
import './Portfolio.css';

export const PortfolioPage: FC = () => {
  return (
    <div className="portfolio-page">
      <nav style={{ padding: '20px' }}>
        <Link 
          to="/" 
          style={{ 
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            display: 'inline-block'
          }}
        >
          Вернуться на главную
        </Link>
      </nav>
      <h1>Portfolio with Filters</h1>
      <PortfolioFeature />
    </div>
  );
};

export default PortfolioPage;
