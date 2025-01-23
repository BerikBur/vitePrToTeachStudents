import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export const Navigation: FC = () => {
  return (
    <div className="main-navigation">
      <nav>
        <Link 
          to="/portfolio" 
          className="nav-button"
        >
          Перейти к портфолио
        </Link>
        <Link 
          to="/store" 
          className="nav-button"
        >
          Перейти в магазин
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
