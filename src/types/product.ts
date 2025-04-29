
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  colors: string[];
  sizes: number[];
  category: string;
  new: boolean;
  url: string;
}
