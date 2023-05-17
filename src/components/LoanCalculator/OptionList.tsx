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
  Slider,
} from '@mui/material';
import FundPurposeList from '../FundPurposeList';
import SelectVariants from '../SelectVariants';
import theme from '../../theme';
import PanelTitle from '../PanelTitle';

const desired = ['30 days', '60 days', '90 days'];

const OptionList = () => {
  const [desiredRepayment, setDesiredRepayment] = React.useState<string>();

  return (
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
          <FormLabel id="revenue-frequency">Revenue Shared Frequency</FormLabel>
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
  );
};

export default OptionList;
