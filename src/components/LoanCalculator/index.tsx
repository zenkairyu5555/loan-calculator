import React from 'react';
import {
  Box,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Paper,
  TextField,
  Typography,
  Slider,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import FundPurposeList from '../FundPurposeList';
import SelectVariants from '../SelectVariants';
import styled from '@emotion/styled';
import theme from '../../theme';

const desired = ['30 days', '60 days', '90 days'];

const PanelTitle = styled(Typography)(() => ({
  fontSize: '30px',
  fontWeight: 700,
  marginBottom: '36px',
  [theme.breakpoints.down(650)]: {
    fontSize: '24px',
    fontWeight: 600,
    marginBottom: '30px'
  },
}));

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

const LoanCalculator = () => {
  const [desiredRepayment, setDesiredRepayment] = React.useState<string>();

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
      <Paper
        elevation={1}
        sx={{
          width: '58%',
          borderRadius: '20px',
          boxShadow: '0px 3px 20px 6px rgba(0, 0, 0, 0.02)',
          [theme.breakpoints.up(1500)]: {
            padding: '0px 120px',
          },
          [theme.breakpoints.down(1500)]: {
            padding: '0px 80px',
          },
          [theme.breakpoints.down(1430)]: {
            width: '100%',
          },
          [theme.breakpoints.down(650)]: {
            padding: '0px 70px',
          },
        }}
      >
        <Box sx={{ margin: '26px auto' }}>
          <PanelTitle>Financing options</PanelTitle>
          <FormGroup sx={{ marginBottom: 2 }}>
            <FormLabel id="revenue_amount">
              What is your annual business revenue?
            </FormLabel>
            <TextField
              fullWidth
              variant="filled"
              type="number"
              sx={{ marginTop: '2px' }}
            />
          </FormGroup>
          <FormGroup sx={{ marginBottom: '11px' }}>
            <FormLabel id="loan_amount">
              What is your desired loan amount?
            </FormLabel>
            <Box
              sx={{ display: 'flex', flexDirection: 'row', marginTop: '13px' }}
            >
              <Slider
                size="medium"
                defaultValue={60000}
                aria-label="medium"
                valueLabelDisplay="auto"
                min={50000}
                max={88888}
                marks={[
                  {
                    value: 50000,
                    label: '$50000',
                  },
                  {
                    value: 88888,
                    label: '$88888',
                  },
                ]}
              />
              <TextField
                sx={{ width: '95px', marginLeft: 5 }}
                value={6000}
                disabled
                InputProps={{
                  style: { color: '#0E7CF4' },
                }}
                variant="filled"
              />
            </Box>
          </FormGroup>
          <FormGroup
            sx={{
              marginBottom: '37px',
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
            }}
          >
            <FormLabel id="percentage">Revenue share percentage:</FormLabel>
            <FormLabel id="percentage_value" sx={{ color: '#0E7CF4' }}>
              7.56%
            </FormLabel>
          </FormGroup>
          <FormGroup
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              marginBottom: '17px',
            }}
          >
            <FormLabel id="revenue-frequency">
              Revenue Shared Frequency
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="revenue-frequency-label"
              name="revenue-frequency-radio-buttons-group"
            >
              <FormControlLabel
                value="monthly"
                control={<Radio />}
                label="Monthly"
                sx={{
                  '& .MuiRadio-root.Mui-checked + .MuiFormControlLabel-label': {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
              />
              <FormControlLabel
                value="weekly"
                control={<Radio />}
                label="Weekly"
                sx={{
                  '& .MuiRadio-root.Mui-checked + .MuiFormControlLabel-label': {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
              />
            </RadioGroup>
          </FormGroup>
          <FormGroup
            sx={{
              marginBottom: '22px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <FormLabel id="percentage" sx={{ marginRight: '60px' }}>
              Desired Repayment Delay
            </FormLabel>
            <SelectVariants
              options={desired}
              value={desiredRepayment}
              setValue={setDesiredRepayment}
            />
          </FormGroup>
          <FundPurposeList />
        </Box>
      </Paper>
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
    </Box>
  );
};

export default LoanCalculator;
