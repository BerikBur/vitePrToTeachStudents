import { FC } from 'react';
import { Product } from '../types';
import './ShopItem.css';

export const ShopItem: FC<Product> = ({ name, price, color, img }) => {
  return (
    <div className="shop-item">
      <img src={img} alt={name} className="shop-item__image" />
      <h3 className="shop-item__title">{name}</h3>
      <p className="shop-item__color">{color}</p>
      <div className="shop-item__price">${price}</div>
      <button className="shop-item__button">ADD TO CART</button>
    </div>
  );
};
