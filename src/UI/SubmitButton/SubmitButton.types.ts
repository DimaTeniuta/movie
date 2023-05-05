import { SxProps } from '@mui/material';
import { ReactNode } from 'react';

export interface IConfirmButtonProps {
  children: ReactNode;
  onClick?: () => void;
  sx?: SxProps;
}
