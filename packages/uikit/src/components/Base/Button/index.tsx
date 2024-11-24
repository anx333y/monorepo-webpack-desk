import React, {FC, ReactNode} from "react";
import {Button as MuiButton} from '@mui/material';

export interface ButtonProps {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'error';
  variant?: 'contained' | 'outlined' | 'text';
};

const Button: FC<ButtonProps> = ({
  children, color, variant
}) => {
  return (
    <>
      <MuiButton
        color={color}
        variant={variant}
      >
        {children}
      </MuiButton>
    </>
  )
};

export {Button};