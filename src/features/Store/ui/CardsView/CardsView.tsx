import { FC } from 'react';
import { Product } from '../types';
import { ShopCard } from '../../ui/ShopCard/ShopCard';
import './CardsView.css';

interface CardsViewProps {
  cards: Product[];
}

export const CardsView: FC<CardsViewProps> = ({ cards }) => {
  return (
    <div className="cards-view">
      {cards.map((card, index) => (
        <ShopCard key={index} {...card} />
      ))}
    </div>
  );
};
