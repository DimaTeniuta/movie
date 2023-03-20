import { ReactNode } from 'react';

export interface ICardProps {
  image: string;
  children: ReactNode;
  rating: number;
  onClick: () => void;
}

export interface IImage {
  image: string;
}
