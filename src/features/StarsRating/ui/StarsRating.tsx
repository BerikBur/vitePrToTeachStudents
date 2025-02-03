import { FC } from 'react';
import Star from './Star';
import './StarsRating.css';

interface StarsRatingProps {
  count?: number;
}

export const StarsRating: FC<StarsRatingProps> = ({ count = 0 }) => {
  // Validate count
  if (!Number.isInteger(count) || count < 1 || count > 5) {
    return null;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {[...Array(count)].map((_, index) => (
        <Star key={index} />
      ))}
    </ul>
  );
};
