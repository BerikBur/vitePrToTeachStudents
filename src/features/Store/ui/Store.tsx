import { FC, useState } from 'react';
import { IconSwitch } from '@shared/ui/IconSwitch/IconSwitch';
import { CardsView } from './CardsView/CardsView';
import { ListView } from './ListView/ListView';
import { Product } from './types';
import './Store.css';

const products: Product[] = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

export const Store: FC = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');

  const handleSwitch = () => {
    setViewMode(prev => prev === 'cards' ? 'list' : 'cards');
  };

  return (
    <div className="store">
      <IconSwitch 
        icon={viewMode === 'cards' ? 'view_list' : 'view_module'} 
        onSwitch={handleSwitch} 
      />
      {viewMode === 'cards' ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
};
