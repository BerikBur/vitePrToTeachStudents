import { FC } from 'react';
import { Item } from '../model/types';

interface ListingItemProps {
  item: Item;
}

const ListingItem: FC<ListingItemProps> = ({ item }) => {
  const decodeHtml = (html: string) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  const formatTitle = (title: string) => {
    const decodedTitle = decodeHtml(title);
    return decodedTitle.length > 50 ? decodedTitle.substring(0, 50) + '...' : decodedTitle;
  };

  const formatPrice = (price: string, currency: string) => {
    switch (currency) {
      case 'USD':
        return `$${price}`;
      case 'EUR':
        return `€${price}`;
      default:
        return `${price} ${currency}`;
    }
  };

  const getQuantityLevel = (quantity: number) => {
    if (quantity <= 10) return 'level-low';
    if (quantity <= 20) return 'level-medium';
    return 'level-high';
  };

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage?.url_570xN} alt={formatTitle(item.title)} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{formatTitle(item.title)}</p>
        <p className="item-price">
          {formatPrice(item.price, item.currency_code)}
        </p>
        <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
          {item.quantity} left
        </p>
      </div>
    </div>
  );
};

export default ListingItem;
