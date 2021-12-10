import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [tipo, setTipo] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTipo(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">TIPO</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tipo}
          label="Tipo"
          onChange={handleChange}
          style={{maxHeight: '40px'}}
        >
          <MenuItem value={10}>REALEASE</MenuItem>
          <MenuItem value={20}>EVENT</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}