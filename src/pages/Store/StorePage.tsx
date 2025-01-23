import { FC } from 'react';
import { Store } from '@features/Store/ui/Store';
import { Link } from 'react-router-dom';
import './StorePage.css';

export const StorePage: FC = () => {
  return (
    <div className="store-page">
      <nav className="store-nav">
        <Link to="/" className="back-button">
          Вернуться на главную
        </Link>
      </nav>
      <Store />
    </div>
  );
};

export default StorePage;
