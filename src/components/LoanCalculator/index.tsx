import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const LoanCalculator = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        height: '30px'
      }}
    >
      <Paper elevation={1} sx={{ width: '58%' }} />
      <Paper elevation={1} sx={{ width: '38%', marginLeft: '21px' }} />
    </Box>
  );
};

export default LoanCalculator;
