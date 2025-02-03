import { FC } from 'react';
import { Link } from 'react-router-dom';
import { StarsRating } from '@features/StarsRating';
import './Stars.css';

const StarsPage: FC = () => {
  return (
    <div className="stars-page">
      <Link to="/" className="nav-button">
        Вернуться на главную
      </Link>
      
      <div className="content">
        <h1>Рейтинг фильмов</h1>
        <div className="rating-example">
          <h3>Пример с 3 звездами:</h3>
          <StarsRating count={3} />
          
          <h3>Пример с 5 звездами:</h3>
          <StarsRating count={5} />
          
          <h3>Пример с неверным рейтингом (не должен отображаться):</h3>
          <StarsRating count={6} />
        </div>
      </div>
    </div>
  );
};

export default StarsPage;
