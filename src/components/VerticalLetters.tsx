import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const LetterWrapper = styled('div')({
  position: 'absolute',
  top: -10,
  bottom: 20,
  left: -15, // Ajuste a posição da letra verticalmente conforme necessário
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
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
