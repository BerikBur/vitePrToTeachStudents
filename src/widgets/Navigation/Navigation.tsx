import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

interface NavigationProps {
  children?: ReactNode;
}

export const Navigation: FC<NavigationProps> = ({ children }) => {
  return (
    <div className="main-navigation">
      <nav>
        {children || (
          <>
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
            <Link 
              to="/stars" 
              className="nav-button"
            >
              Перейти к рейтингу фильмов
            </Link>
            <Link 
              to="/listing" 
              className="nav-button"
            >
              Перейти к каталогу Etsy
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
