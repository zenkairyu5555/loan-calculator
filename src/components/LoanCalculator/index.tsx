import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import theme from '../../theme';

import OptionList from './OptionList';
import ResultView from './ResultView';
import { LOAN_CONFIG_URL } from '../../configs';

import { IConfig, ILoanConfig } from '../../types';
import {
  getRevenueSharedFrequencyOptions,
  getDesiredRepaymentDelayOptions,
  getUseOfFundOptions,
} from '../../utils';

const LoanCalculator = () => {
  const [loanConfig, setLoanConfig] = useState<ILoanConfig | undefined>();
  const [state, setState] = useState<Record<string, unknown>>({});

  useEffect(() => {
    fetch(LOAN_CONFIG_URL)
      .then((response) => response.json())
      .then((config) => {
        const newLoanConfig: Record<string, IConfig> = {};
        config.forEach((c: IConfig) => {
          newLoanConfig[c.name] = {
            ...c,
          };
          let convertFunc: Function | undefined;
          if (c.name === 'revenue_shared_frequency')
            convertFunc = getRevenueSharedFrequencyOptions;
          if (c.name === 'desired_repayment_delay')
            convertFunc = getDesiredRepaymentDelayOptions;
          if (c.name === 'use_of_funds') convertFunc = getUseOfFundOptions;

          if (convertFunc) {
            newLoanConfig[c.name].options = convertFunc(c.value as string);
          }
        });
        setLoanConfig(newLoanConfig);
        setState({
          revenue_shared_frequency:
            newLoanConfig.revenue_shared_frequency?.options![0],
          desired_repayment_delay:
            newLoanConfig.desired_repayment_delay?.options![0],
        });
      })
      .catch((err) => {});
  }, []);

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
      <OptionList config={loanConfig} state={state} setState={setState} />
      <ResultView config={loanConfig} state={state} />
    </Box>
  );
};

export default LoanCalculator;
