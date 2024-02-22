import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const LetterWrapper = styled('div')({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: -25, // Ajuste a posição da letra verticalmente conforme necessário
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Letter = styled(Typography)({
  color: 'white',
  fontWeight: 'bold',
});

const VerticalLetters = () => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']; // Letras para cada linha
  return (
    <LetterWrapper>
      {letters.map((letter, index) => (
        <Letter key={index}>{letter}</Letter>
      ))}
    </LetterWrapper>
  );
};

export default VerticalLetters;
