import { FC } from 'react';
import ListingItem from './ListingItem';
import { Item } from '../model/types';
import './Listing.css';

interface ListingProps {
  items?: Item[];
}

export const Listing: FC<ListingProps> = ({ items = [] }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <ListingItem key={item.listing_id} item={item} />
      ))}
    </div>
  );
};
