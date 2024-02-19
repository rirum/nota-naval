import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CustomPaper = styled(Paper)({
  border: '1px dashed white',
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
  borderRight: '8px solid white',
});

const HorizontalLine = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  borderBottom: '8px solid white',
});

const Word = styled(Typography)({
  position: 'absolute',
  color: 'white',
  fontWeight: 'bold',
});

const Layer = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const GridExample = () => {
  return (
    <div style={{ position: 'relative' }}>
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
                <CustomPaper style={{ width: 85, height: 85 }}>
                  {colIndex === 4 && <VerticalLine />}
                  {rowIndex === 4 && <HorizontalLine />}
                </CustomPaper>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
      <Layer style={{ top: -20, left: -70, transform: 'translateY(-50%)' }}>
        <Word>Interessante</Word>
      </Layer>

      <Layer style={{ top: -20, left: -70, transform: 'translateY(-45%)' }}>
        <Word>A</Word>
      </Layer>

      <Layer style={{ top: -20, left: -70, transform: 'translateY(-35%)' }}>
        <Word>B</Word>
      </Layer>

      <Layer style={{ top: -20, left: -70, transform: 'translateY(-25%)' }}>
        <Word>C</Word>
      </Layer>

      <Layer style={{ top: -20, left: -70, transform: 'translateY(-15%)' }}>
        <Word>D</Word>
      </Layer>

      <Layer style={{ top: -20, left: -70, transform: 'translateY(-5%)' }}>
        <Word>E</Word>
      </Layer>

      <Layer style={{ bottom: -40, left: -70, transform: 'translateY(52%)' }}>
        <Word>Desinteressante</Word>
      </Layer>

      <Layer style={{ top: -20, left: -70, transform: 'translateY(8%)' }}>
        <Word>F</Word>
      </Layer>

      <Layer style={{ top: -20, left: -70, transform: 'translateY(15%)' }}>
        <Word>G</Word>
      </Layer>

      <Layer style={{ top: -20, left: -70, transform: 'translateY(25%)' }}>
        <Word>H</Word>
      </Layer>

      <Layer style={{ top: -20, left: -70, transform: 'translateY(35%)' }}>
        <Word>I</Word>
      </Layer>

      <Layer style={{ top: -20, left: -70, transform: 'translateY(45%)' }}>
        <Word>J</Word>
      </Layer>

      <Layer style={{ top: 10, transform: 'translateX(35%)' }}>
        <Word>Bom</Word>
      </Layer>

      <Layer style={{ top: 25, transform: 'translateX(-6%)' }}>
        <Word>6</Word>
      </Layer>

      <Layer style={{ top: 25, transform: 'translateX(2%)' }}>
        <Word>7</Word>
      </Layer>

      <Layer style={{ top: 25, transform: 'translateX(10%)' }}>
        <Word>8</Word>
      </Layer>

      <Layer style={{ top: 25, transform: 'translateX(18%)' }}>
        <Word>9</Word>
      </Layer>

      <Layer style={{ top: 25, transform: 'translateX(27%)' }}>
        <Word>10</Word>
      </Layer>

      <Layer style={{ top: 10, transform: 'translateX(-52%)' }}>
        <Word>Ruim</Word>
      </Layer>

      <Layer style={{ top: 25, transform: 'translateX(-14%)' }}>
        <Word>5</Word>
      </Layer>

      <Layer style={{ top: 25, transform: 'translateX(-22%)' }}>
        <Word>4</Word>
      </Layer>

      <Layer style={{ top: 25, transform: 'translateX(-31%)' }}>
        <Word>3</Word>
      </Layer>

      <Layer style={{ top: 25, transform: 'translateX(-39%)' }}>
        <Word>2</Word>
      </Layer>

      <Layer style={{ top: 25, transform: 'translateX(-46%)' }}>
        <Word>1</Word>
      </Layer>
    </div>
  );
};

export default GridExample;
