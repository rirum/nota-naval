'use client';
import GridExample from '@/components/Grid';
import { styled } from '@mui/system';
import GlobalCSS from './global';

export default function Home() {
  return (
    <Background>
      <GlobalCSS />
      <ContainerGrid>
        <GridExample></GridExample>
      </ContainerGrid>
    </Background>
  );
}

const Background = styled('div')({
  backgroundColor: '#023047',
  width: '100vw',
  height: '100wh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ContainerGrid = styled('div')({
  width: '1000px',
  height: '1000px',
  marginTop: '80px',
});
