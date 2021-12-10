import React from 'react';

import { Container } from './styles';
import Box from '@mui/material/Box';

import SelectComponente from '../SelectComponent';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Endomarketing: React.FC = () => {
  return (
    <Container >
      <Box display='flex' sx={{ m: 2, justifyContent: 'space-between', alignContent: 'center'}} >
        <Box paddingTop={3} paddingLeft={6} paddingBottom={2} >
          <Typography
            variant='h4'
            color='text.disabled'
            style={{ fontWeight: 800 }}
            fontFamily='Open Sans'
          >
              Endomarketing
          </Typography>
        </Box>
        <div className='vazia'/>

        <SelectComponente />
        
        <Stack spacing={1} direction="row" justifyContent='flex-end'>
          <Button style={{maxWidth: '130px', maxHeight: '40px', minWidth: '50px', minHeight: '30px'}} variant="contained">Criar <AddIcon /></Button> 
        </Stack>
        
        <div className='vazia'/>
      </Box>
    </Container>  
  );
}

export default Endomarketing;