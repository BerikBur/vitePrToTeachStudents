import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Listing } from '@features/Listing';
import { Item } from '@features/Listing/model/types';
import './Listing.css';
import jsonData from '@shared/data/etsy.json';

const data: Item[] = (jsonData as Item[])
  .filter(item => (
    item.listing_id &&
    item.title &&
    item.price &&
    item.currency_code &&
    typeof item.quantity === 'number'
  ))
  .map(item => ({
    listing_id: item.listing_id,
    url: item.url,
    MainImage: item.MainImage,
    title: item.title,
    currency_code: item.currency_code,
    price: item.price,
    quantity: item.quantity
  }));

const ListingPage: FC = () => {
  return (
    <div className="listing-page">
      <Link to="/" className="nav-button">
        Вернуться на главную
      </Link>
      
      <div className="content">
        <h1>Каталог Etsy</h1>
        <Listing items={data} />
      </div>
    </div>
  );
};

export default ListingPage;
