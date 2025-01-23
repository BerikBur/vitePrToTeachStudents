import { FC } from 'react';
import { Product } from '../types';
import './ShopCard.css';

export const ShopCard: FC<Product> = ({ name, price, color, img }) => {
  return (
    <div className="shop-card">
      <div className="shop-card__image" style={{ backgroundImage: `url(${img})` }}>
        <div className="shop-card__overlay">
          <h3 className="shop-card__title">{name}</h3>
          <p className="shop-card__color">{color}</p>
        </div>
      </div>
      <div className="shop-card__footer">
        <div className="shop-card__price">${price}</div>
        <button className="shop-card__button">ADD TO CART</button>
      </div>
    </div>
  );
};
