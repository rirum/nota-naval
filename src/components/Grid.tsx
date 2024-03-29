import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Modal,
} from '@mui/material';
import { styled } from '@mui/system';
import VerticalLetters from './VerticalLetters';
import HorizontalNumbers from './HorizontalNumbers';
import { NorthWord, SouthWord } from './NorthAndSouthWord';
import { EastWord, WestWord } from './EastAndWestWord';

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

const AvatarImage = styled('img')({
  width: '40px',
  height: '40px',
  marginRight: '5px',
  borderRadius: '50%',
});

const GridExample = () => {
  const [avatarPositions, setAvatarPositions] = useState<{
    [key: string]: string[];
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
    const positionKey = `${selectedPosition.row}-${selectedPosition.col}`;
    const newNames = avatarPositions[positionKey]
      ? [...avatarPositions[positionKey], nameInput]
      : [nameInput];
    setAvatarPositions({
      ...avatarPositions,
      [positionKey]: newNames,
    });
    handleModalClose();
  };

  const handleClearImages = () => {
    setAvatarPositions({});
  };

  const handleDeleteImage = (index: number) => {
    const { row, col } = selectedPosition;
    const positionKey = `${row}-${col}`;
    const updatedImages = avatarPositions[positionKey].filter(
      (_, i) => i !== index
    );
    if (updatedImages.length === 0) {
      const newAvatarPositions = { ...avatarPositions };
      delete newAvatarPositions[positionKey];
      setAvatarPositions(newAvatarPositions);
    } else {
      setAvatarPositions({
        ...avatarPositions,
        [positionKey]: updatedImages,
      });
    }
  };

  return (
    <div>
      <GridAndFormWrapper>
        <NorthWord />
        <SouthWord />
        <EastWord />
        <WestWord />
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
                      <>
                        {avatarPositions[`${rowIndex}-${colIndex}`]
                          .slice(0, 2)
                          .map((imageUrl, index) => (
                            <AvatarImage
                              key={index}
                              src={imageUrl}
                              alt={`Avatar ${index}`}
                              style={{
                                position: 'absolute',
                                top: index === 0 ? 0 : 45,
                                left: index === 0 ? 0 : 45,
                              }}
                              onClick={() => handleDeleteImage(index)}
                            />
                          ))}
                        {avatarPositions[`${rowIndex}-${colIndex}`]?.length >=
                          4 &&
                          avatarPositions[`${rowIndex}-${colIndex}`]
                            .slice(0, 4)
                            .map((imageUrl, index) => (
                              <AvatarImage
                                key={index}
                                src={imageUrl}
                                alt={`Avatar ${index + 2}`}
                                style={{
                                  position: 'absolute',
                                  top: index < 2 ? 0 : 45,
                                  left: index % 2 === 0 ? 0 : 45,
                                }}
                                onClick={() => handleDeleteImage(index + 2)}
                              />
                            ))}
                      </>
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
      </GridAndFormWrapper>
      <Button onClick={handleClearImages}>Limpar Nomes</Button>
    </div>
  );
};

export default GridExample;
