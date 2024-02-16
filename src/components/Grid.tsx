import React from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const CustomPaper = styled(Paper)({
  border: '2px dashed white',
  width: 50,
  height: 50,
  backgroundColor: '#023047',
});

const GridExample = () => {
  return (
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
            <Grid key={colIndex} item xs={1} style={{ margin: 0, padding: 0 }}>
              <CustomPaper style={{ width: 85, height: 85 }}></CustomPaper>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default GridExample;
