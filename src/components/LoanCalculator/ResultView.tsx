import {
  Box,
  FormGroup,
  Paper,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import styled from '@emotion/styled';
import theme from '../../theme';
import PanelTitle from '../PanelTitle';

const StyledTypography = styled(Typography)(() => ({
  fontSize: '22px',
  lineHeight: '24px',
  fontWeight: 700,
  [theme.breakpoints.down(650)]: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: '20px',
  },
  [theme.breakpoints.down(450)]: {
    maxWidth: '125px',
  },
}));

const ResultView = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        flex: 1,
        padding: '0px 80px',
        borderRadius: '20px',
        backgroundColor: '#FFFFFFCC',
        boxShadow: '0px 3px 20px 6px rgba(0, 0, 0, 0.02)',
        [theme.breakpoints.down(1500)]: {
          padding: '0px 60px',
        },
        [theme.breakpoints.down(1430)]: {
          width: '100%',
          padding: '0px 80px',
        },
        [theme.breakpoints.down(650)]: {
          padding: '0px 70px',
        },
      }}
    >
      <Box sx={{ margin: '24px auto' }}>
        <PanelTitle>Results</PanelTitle>
        <FormGroup
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: '27px',
          }}
        >
          <StyledTypography>Annual Business Revenue</StyledTypography>
          <StyledTypography>$250,000</StyledTypography>
        </FormGroup>
        <FormGroup
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: '37px',
          }}
        >
          <StyledTypography>Funding Amount</StyledTypography>
          <StyledTypography>$60,000</StyledTypography>
        </FormGroup>
        <FormGroup
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: '17px',
          }}
        >
          <StyledTypography>Fees</StyledTypography>
          <StyledTypography>(50%)$30,000</StyledTypography>
        </FormGroup>
        <Divider variant="middle" />
        <FormGroup
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            margin: '19px 0px 37px 0px',
          }}
        >
          <StyledTypography>Total Revenue Share</StyledTypography>
          <StyledTypography>$90,000</StyledTypography>
        </FormGroup>
        <FormGroup
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: '37px',
          }}
        >
          <StyledTypography>Expected transfer</StyledTypography>
          <StyledTypography>47</StyledTypography>
        </FormGroup>
        <FormGroup
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <StyledTypography>Expected Completion date</StyledTypography>
          <StyledTypography sx={{ color: '#0962EA' }}>
            January 24, 2023
          </StyledTypography>
        </FormGroup>
      </Box>
    </Paper>
  );
};

export default ResultView;
