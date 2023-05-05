import React from 'react';
import Slider from '@mui/material/Slider';
import { IRangeSliderProps } from './RangeSlider.types';

function valuetext(value: number) {
  return `${value}°C`;
}

export const RangeSlider = ({ value, onChange, min, max }: IRangeSliderProps) => {
  const handleChange = (_: Event, newValue: number | number[]) => {
    onChange(newValue as number[]);
  };

  return (
    <Slider
      getAriaLabel={() => 'Temperature range'}
      value={value}
      min={min}
      max={max}
      color="secondary"
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
    />
  );
};
