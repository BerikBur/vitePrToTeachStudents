export interface Item {
  listing_id: number;
  state?: string;
  user_id?: number;
  category_id?: number;
  title: string;  // Required for display
  description?: string;
  url?: string;
  MainImage?: {
    url_570xN: string;
  };
  currency_code: string;  // Required for price formatting
  price: string;         // Required for display
  quantity: number;      // Required for level display
  error_messages?: string[];
}
