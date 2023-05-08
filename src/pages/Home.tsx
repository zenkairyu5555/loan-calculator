import { Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import Layout from '../layout/Guest';
import LoanCalculator from '../components/LoanCalculator';

const ButtonGroup = styled('div')({
  backgroundColor: '#ffffff',
  width: '100%',
  height: '162px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0px 65px 0px 75px',
  borderRadius: '20px',
  fontSize: '20px',
  position: 'absolute',
  bottom: 0,
  left: 0,
});

const Home = () => {
  return (
    <Layout>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1556px',
        margin: '146px auto 0px auto',
      }}>
        <LoanCalculator />
        <ButtonGroup>
          <Button variant="outlined" sx={{ width: '532px', height: '70px' }}>
            back
          </Button>
          <Button variant="contained" sx={{ width: '532px', height: '70px', marginLeft: '8px' }}>
            next
          </Button>
        </ButtonGroup>
      </Box>
    </Layout>
  );
};

export default Home;
