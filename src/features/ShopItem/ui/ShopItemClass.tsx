import { Component, memo } from 'react';
import './ShopItem.css';

interface ShopItemProps {
  item: {
    brand: string;
    title: string;
    description: string;
    descriptionFull: string;
    price: number;
    currency: string;
  };
}

class ShopItemClass extends Component<ShopItemProps> {
  render() {
    const { item } = this.props;
    const formattedPrice = `${item.currency}${(item.price + 35).toFixed(2)}`;

    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{formattedPrice}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

export default memo(ShopItemClass);