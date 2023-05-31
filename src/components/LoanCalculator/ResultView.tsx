import { useMemo } from 'react';
import { Box, FormGroup, Paper, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import styled from '@emotion/styled';
import theme from '../../theme';
import PanelTitle from '../PanelTitle';
import {
  formatInDollar,
  getFee,
  getTotalRevenueShare,
  getTransfers,
  getCompletionDate,
} from '../../utils';
import { ILoanConfig } from '../../types';

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

const ResultView = ({
  state,
  config,
}: {
  state: Record<string, unknown>;
  config: ILoanConfig | undefined;
}) => {
  const revenueAmount = formatInDollar(state.revenue_amount as number);
  const loanAmount = formatInDollar(state.loan_amount as number);
  const fee = formatInDollar(getFee(state.loan_amount as number, config));
  const feePercentage =
    config && Number.isFinite(parseFloat(config.desired_fee_percentage.value))
      ? parseFloat(config.desired_fee_percentage.value)
      : '';
  const totalRevenueShare = formatInDollar(
    getTotalRevenueShare(state.loan_amount as number, config),
  );


  const transfers = useMemo(
    () =>
      getTransfers(
        state.revenue_amount as number,
        state.loan_amount as number,
        state.revenue_shared_frequency as string,
        config,
      ),
    [state, config],
  );

  const completionDate = getCompletionDate(
    state.revenue_amount as number,
    state.loan_amount as number,
    state.revenue_shared_frequency as string,
    state.desired_repayment_delay as string,
    config,
  );

  return (
    <Paper
      elevation={1}
      sx={{
        flex: 1,
        padding: '0px 60px',
        borderRadius: '20px',
        backgroundColor: '#FFFFFFCC',
        boxShadow: '0px 3px 20px 6px #00000003',
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
          <StyledTypography>{revenueAmount}</StyledTypography>
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
          <StyledTypography>{loanAmount}</StyledTypography>
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
          <StyledTypography>
            ({feePercentage}%) {fee}
          </StyledTypography>
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
          <StyledTypography>{totalRevenueShare}</StyledTypography>
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
          <StyledTypography>{transfers}</StyledTypography>
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
            {completionDate}
          </StyledTypography>
        </FormGroup>
      </Box>
    </Paper>
  );
};

export default ResultView;
