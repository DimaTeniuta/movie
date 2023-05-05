export interface IRangeSliderProps {
  value: number[];
  min?: number;
  max?: number;
  onChange: (newValue: number | number[]) => void;
}
