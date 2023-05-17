import { Button, Stack, Box } from '@mui/material';
import { styled } from '@mui/system';
import Layout from '../layout/Guest';
import LoanCalculator from '../components/LoanCalculator';
import theme from '../theme';

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
});

const StyledButton = styled(Button)(() => ({
  height: '70px',
  fontWeight: 700,
  marginLeft: '8px',
  borderRadius: '20px',
  [theme.breakpoints.down(650)]: {
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: '8px',
    height: '56px',
  },
}));

const Home = () => {
  return (
    <Layout>
      <Stack
        justifyContent="center"
        sx={{
          maxWidth: '1556px',
          width: '100%',
          margin: '146px auto 0px auto',
          [theme.breakpoints.down(650)]: {
            marginTop: '46px',
          },
        }}
      >
        <LoanCalculator />
        <Box
          sx={{
            padding: '10px',
            marginTop: '300px',
            [theme.breakpoints.down(650)]: {
              marginTop: '46px',
            },
          }}
        >
          <ButtonGroup>
            <StyledButton
              variant="outlined"
              sx={{
                width: '532px',
              }}
            >
              back
            </StyledButton>
            <StyledButton
              variant="contained"
              sx={{
                width: '512px',
              }}
            >
              next
            </StyledButton>
          </ButtonGroup>
        </Box>
      </Stack>
    </Layout>
  );
};

export default Home;
