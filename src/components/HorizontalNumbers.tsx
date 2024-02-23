import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const NumberWrapper = styled('div')({
  position: 'absolute',
  top: -25,
  bottom: 20,
  left: 10, // Ajuste a posição da letra verticalmente conforme necessário
  display: 'flex',
  width: '80%',
  justifyContent: 'space-between',
});

const Number = styled(Typography)({
  color: 'white',
  fontWeight: 'bold',
});

const HorizontalNumbers = () => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; // Letras para cada linha
  return (
    <NumberWrapper>
      {numbers.map((number, index) => (
        <Number key={index}>{number}</Number>
      ))}
    </NumberWrapper>
  );
};

export default HorizontalNumbers;
