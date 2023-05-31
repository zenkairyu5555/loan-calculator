import React, { Dispatch, SetStateAction } from 'react';
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
import InputAdornment from '@mui/material/InputAdornment';
import FundPurposeList from '../FundPurposeList';
import SelectVariants from '../SelectVariants';
import theme from '../../theme';
import PanelTitle from '../PanelTitle';
import { ILoanConfig, IOptionState } from '../../types';
import {
  getRepaymentRate,
  formatNumber,
  removeUnit,
  capitalized,
  getLoanAmountMin,
  getLoanAmountMax,
  getRepaymentRateInString,
} from '../../utils';

const OptionList = ({
  config,
  state,
  setState,
}: {
  config: ILoanConfig | undefined;
  state: IOptionState;
  setState: Dispatch<SetStateAction<IOptionState>>;
}) => {
  const setDesiredRepayment = (value: string) => {
    setState((prev: IOptionState) => ({
      ...prev,
      desired_repayment_delay: value,
    }));
  };

  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value: any = event.target.value;
    let targetName = event.target.name;

    if (targetName === 'revenue_amount' || targetName === 'loan_amount') {
      value = value.replace(/\D/g, '');
      value = parseInt(value);
      value = Number.isNaN(value) ? undefined : value;
    }

    setState((prev: IOptionState) => {
      const newState = {
        ...prev,
        [targetName]: value,
      };
      if (targetName === 'revenue_amount')
        newState.loan_amount = getLoanAmountMin(value, config);
      return newState;
    });
  };

  const handleSliderChange = (
    event: Event,
    value: number | number[],
    activeThumb: number,
  ) => {
    const rr = getRepaymentRate(
      state.revenue_amount,
      Array.isArray(value) ? value[0] : value,
    );
    if (config && rr) {
      if (rr < parseFloat(config.revenue_percentage_min.value)) return;
      if (rr > parseFloat(config.revenue_percentage_max.value)) return;
    }
    setState((prev: IOptionState) => ({
      ...prev,
      loan_amount: Array.isArray(value) ? value[0] : value,
    }));
  };

  const repaymentRate = getRepaymentRateInString(
    state.revenue_amount,
    state.loan_amount,
  );

  const revenueAmount = formatNumber(state.revenue_amount);
  const loanAmount = formatNumber(state.loan_amount);

  const loanAmountMin = getLoanAmountMin(state.revenue_amount, config);
  const loanAmountMax = getLoanAmountMax(state.revenue_amount, config);

  const sliderAmount = state.loan_amount ? state.loan_amount : loanAmountMin;

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
        {config ? (
          <>
            <FormGroup sx={{ marginBottom: 2 }}>
              <FormLabel id="revenue_amount">
                What is your annual business revenue?
              </FormLabel>
              <TextField
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                name="revenue_amount"
                value={revenueAmount}
                onChange={handleState}
                placeholder={removeUnit(config.revenue_amount.placeholder)}
                sx={{ marginTop: '2px' }}
              />
            </FormGroup>
            <FormGroup sx={{ marginBottom: '11px' }}>
              <FormLabel id="funding_amount">
                What is your desired loan amount?
              </FormLabel>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '13px',
                  justifyContent: 'space-between',
                  gap: 5,
                  [theme.breakpoints.down(650)]: {
                    flexDirection: 'column',
                    gap: 2,
                  },
                }}
              >
                <Slider
                  size="medium"
                  value={sliderAmount}
                  aria-label="medium"
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                  min={loanAmountMin as number}
                  max={loanAmountMax as number}
                  marks={[
                    {
                      value: loanAmountMin as number,
                      label: `$${formatNumber(loanAmountMin)}`,
                    },
                    {
                      value: loanAmountMax as number,
                      label: `$${formatNumber(loanAmountMax)}`,
                    },
                  ]}
                />
                <TextField
                  sx={{
                    width: '95px',
                    minWidth: '95px',
                    '& .MuiFilledInput-root': {
                      paddingLeft: '8px !important',
                    },
                    '& .MuiInputBase-inputAdornedStart': {
                      marginLeft: '-8px !important',
                    },
                  }}
                  name="loan_amount"
                  value={loanAmount}
                  onChange={handleState}
                  InputProps={{
                    style: { color: '#0E7CF4', fontWeight: '700 !important' },
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{
                          '& .MuiTypography-root': {
                            color: '#0962EA !important',
                            fontWeight: '700 !important',
                          },
                        }}
                      >
                        $
                      </InputAdornment>
                    ),
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
                {`${repaymentRate}%`}
              </FormLabel>
            </FormGroup>
            {state.revenue_shared_frequency &&
            config.revenue_shared_frequency.options ? (
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
                  name="revenue_shared_frequency"
                  value={state.revenue_shared_frequency}
                  onChange={handleState}
                >
                  {config.revenue_shared_frequency.options?.map((op) => (
                    <FormControlLabel
                      key={op}
                      value={op}
                      control={<Radio />}
                      label={capitalized(op)}
                      sx={{
                        '& .MuiFormControlLabel-label': {
                          fontSize: '1.125rem !important',
                        },
                        '& .MuiRadio-root.Mui-checked + .MuiFormControlLabel-label':
                          {
                            color: (theme) => theme.palette.primary.main,
                          },
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormGroup>
            ) : null}
            {state.desired_repayment_delay &&
            config.desired_repayment_delay?.options ? (
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
                  options={config.desired_repayment_delay?.options!}
                  value={state.desired_repayment_delay as string}
                  setValue={setDesiredRepayment}
                />
              </FormGroup>
            ) : null}
            {config.use_of_funds?.options && (
              <FundPurposeList options={config.use_of_funds?.options!} />
            )}
          </>
        ) : null}
      </Box>
    </Paper>
  );
};

export default OptionList;
