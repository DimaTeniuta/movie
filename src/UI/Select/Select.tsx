import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select as MuiSelect, SelectChangeEvent } from '@mui/material';
import * as Styled from './Select.styles';

export const Select = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel color="secondary" sx={{ color: 'primary.contrastText' }} id="select">
          Age
        </InputLabel>
        <MuiSelect
          sx={Styled.selectStyle}
          labelId="select"
          id="selectId"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </MuiSelect>
      </FormControl>
    </Box>
  );
};
