import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const WordWrapper = styled('div')({
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Word = styled(Typography)({
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1.5rem',
});

const NorthWord = () => {
  return (
    <WordWrapper style={{ top: -70, right: 85 }}>
      <Word>Interessante</Word>
    </WordWrapper>
  );
};

const SouthWord = () => {
  return (
    <WordWrapper style={{ bottom: -50, right: 90 }}>
      <Word>Desinteressante</Word>
    </WordWrapper>
  );
};

export { NorthWord, SouthWord };
