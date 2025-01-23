import { FC } from 'react';
import { Product } from '../types';
import { ShopItem } from '../../ui/ShopItem/ShopItem';
import './ListView.css';

interface ListViewProps {
  items: Product[];
}

export const ListView: FC<ListViewProps> = ({ items }) => {
  return (
    <div className="list-view">
      {items.map((item, index) => (
        <ShopItem key={index} {...item} />
      ))}
    </div>
  );
};
