import { Box } from '@mui/material';
import theme from '../../theme';

import OptionList from './OptionList';
import ResultView from './ResultView';

const LoanCalculator = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        gap: '21px',
        minHeight: '888px',
        padding: '10px',
        [theme.breakpoints.down('lg')]: {
          flexDirection: 'column',
        },
      }}
    >
      <OptionList />
      <ResultView />
    </Box>
  );
};

export default LoanCalculator;
