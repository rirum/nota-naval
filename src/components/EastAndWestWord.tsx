import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const WordWrapper = styled('div')({
  position: 'absolute',
  top: '50%', // Centraliza verticalmente
  transform: 'translateY(-50%)', // Ajusta a posição verticalmente para o centro
});

const Word = styled(Typography)({
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1.5rem',
});

const EastWord = () => {
  return (
    <WordWrapper style={{ right: 100 }}>
      <Word>Bom</Word>
    </WordWrapper>
  );
};

const WestWord = () => {
  return (
    <WordWrapper style={{ left: -60 }}>
      <Word>Ruim</Word>
    </WordWrapper>
  );
};

export { EastWord, WestWord };
