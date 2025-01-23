import { FC, useCallback, useState } from 'react';
import { ShopItemFunc } from '@features/ShopItem';
import { ShopItemClass } from '@features/ShopItem';
import { Navigation } from '@widgets/Navigation/Navigation';
import './Home.css';

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 399,
  currency: '£',
};

const images = [
  '/images/item-blue.jpg',
  '/images/item-black.jpg'
];

const HomePage: FC = () => {
  const [useClassComponent, setUseClassComponent] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsImageLoaded(false);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsImageLoaded(false);
  }, []);

  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true);
  }, []);

  return (
    <div className="home-page">
      <Navigation />
      <div className="container">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className="highlight-overlay">
            <img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Product view ${currentIndex + 1}`}
              className={`product-image ${isImageLoaded ? 'loaded' : ''}`}
              onLoad={handleImageLoad}
            />
          </div>
          <button className="slider-button prev" onClick={prevImage}>
            &lt;
          </button>
          <button className="slider-button next" onClick={nextImage}>
            &gt;
          </button>
        </div>
        <div className="window">
          {useClassComponent ? (
            <ShopItemClass item={item} />
          ) : (
            <ShopItemFunc item={item} />
          )}
        </div>
        <button
          onClick={() => setUseClassComponent(!useClassComponent)}
          className="toggleButton"
        >
          Переключить на {useClassComponent ? 'функциональный' : 'классовый'} компонент
        </button>
      </div>
    </div>
  );
};

export default HomePage;