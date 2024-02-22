import React, { FormEvent, useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Modal,
} from '@mui/material';
import { styled } from '@mui/system';
import LayerComponent from './Layer';
import VerticalLetters from './VerticalLetters';
import HorizontalNumbers from './HorizontalNumbers';

const GridAndFormWrapper = styled('div')({
  position: 'relative',
});

const CustomPaper = styled(Paper)({
  border: '1px dashed black',
  width: 50,
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  backgroundColor: '#023047',
  position: 'relative',
});

const VerticalLine = styled('div')({
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  borderRight: '8px solid black',
});

const HorizontalLine = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  borderBottom: '8px solid black',
});

const Word = styled(Typography)({
  position: 'absolute',
  color: 'black',
  fontWeight: 'bold',
});

const GridExample = () => {
  const [avatarPositions, setAvatarPositions] = useState<{
    [key: string]: string;
  }>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState({ row: 0, col: 0 });
  const [nameInput, setNameInput] = useState('');

  const handleGridItemClick = (row: number, col: number) => {
    setSelectedPosition({ row, col });
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setNameInput('');
  };

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNameInput(event.target.value);
  };

  const handleModalSubmit = () => {
    setAvatarPositions({
      ...avatarPositions,
      [`${selectedPosition.row}-${selectedPosition.col}`]: nameInput,
    });
    handleModalClose();
  };

  const handleClearNames = () => {
    setAvatarPositions({});
  };
  return (
    <GridAndFormWrapper>
      <VerticalLetters />
      <HorizontalNumbers />
      <Grid container spacing={0} style={{ margin: 0, padding: 0 }}>
        {[...Array(10)].map((_, rowIndex) => (
          <Grid
            key={rowIndex}
            item
            xs={12}
            container
            style={{ margin: 0, padding: 0 }}
          >
            {[...Array(10)].map((_, colIndex) => (
              <Grid
                key={colIndex}
                item
                xs={1}
                style={{ margin: 0, padding: 0 }}
              >
                <CustomPaper
                  style={{ width: 85, height: 85 }}
                  onClick={() => handleGridItemClick(rowIndex, colIndex)}
                >
                  {colIndex === 4 && <VerticalLine />}
                  {rowIndex === 4 && <HorizontalLine />}
                  {avatarPositions[`${rowIndex}-${colIndex}`] && (
                    <Word>{avatarPositions[`${rowIndex}-${colIndex}`]}</Word>
                  )}
                </CustomPaper>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>

      <div>
        <Modal open={modalOpen} onClose={handleModalClose}>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: 20,
            }}
          >
            <TextField
              label="Nome"
              value={nameInput}
              onChange={handleNameInputChange}
              autoFocus // Adicionando para focar automaticamente no campo ao abrir o modal
            />
            <Button onClick={handleModalSubmit}>Salvar</Button>
          </div>
        </Modal>
      </div>
      <Button onClick={handleClearNames}>Limpar Nomes</Button>
    </GridAndFormWrapper>
  );
};

export default GridExample;
