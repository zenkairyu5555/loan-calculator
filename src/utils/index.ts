import { ILoanConfig } from '../types';

export const getRepaymentRate = (
  revenueAmount: number | undefined,
  loanAmount: number | undefined,
) => {
  if (revenueAmount === undefined || loanAmount === undefined) return undefined;
  return (0.156 / 6.2055 / revenueAmount) * (loanAmount * 10) * 100;
};

export const getRepaymentRateInString = (
  revenueAmount: number | undefined,
  loanAmount: number | undefined,
) => {
  const r = getRepaymentRate(revenueAmount, loanAmount);
  if (r === undefined) return '';
  return r.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    // maximumFractionDigits: 2,
  });
};

export const getRevenueSharedFrequencyOptions = (
  revenueSharedFrequency: string,
) => revenueSharedFrequency.split('*');

export const getDesiredRepaymentDelayOptions = (
  desiredRepaymentDelay: string,
) => desiredRepaymentDelay.split('*');

export const getUseOfFundOptions = (useOfFunds: string) =>
  useOfFunds.split('*');

export const formatNumber = (value: number | undefined) => {
  if (value === undefined) return '';
  return value.toLocaleString('en-US', {});
};

export const formatInDollar = (value: number | undefined) => {
  const dollar = formatNumber(value);
  if (dollar) return '$' + dollar;
  return '';
};

export const removeUnit = (value: string) => value.substring(1);

export const capitalized = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const getLoanAmountMin = (
  revenueAmount: number | undefined,
  config: ILoanConfig | undefined,
) => {
  let min: number | undefined;
  if (
    config &&
    config.funding_amount_min &&
    Number.isFinite(parseFloat(config.funding_amount_min.value))
  ) {
    min = parseFloat(config.funding_amount_min.value);
  }

  if (
    config &&
    revenueAmount &&
    config.revenue_percentage_min &&
    Number.isFinite(parseFloat(config.revenue_percentage_min.value))
  ) {
    let amount = Math.round(
      (revenueAmount *
        parseFloat(config.revenue_percentage_min.value) *
        6.2055) /
        (0.156 * 10 * 100),
    );
    if (min && min > amount) return min;
    return amount;
  }
  if (min) return min;
  return undefined;
};

export const getLoanAmountMax = (
  revenueAmount: number | undefined,
  config: ILoanConfig | undefined,
) => {
  let max: number | undefined;
  if (
    config &&
    config.funding_amount_max &&
    Number.isFinite(parseFloat(config.funding_amount_max.value))
  ) {
    max = parseFloat(config.funding_amount_max.value);
  }

  if (config && revenueAmount) {
    let amount = Math.round(revenueAmount / 3);
    if (max && max < amount) return max;
    return amount;
  }
  if (max) return max;
  return undefined;
};

export const getFee = (
  loanAmount: number | undefined,
  config: ILoanConfig | undefined,
) => {
  if (
    loanAmount &&
    config &&
    Number.isFinite(parseFloat(config.desired_fee_percentage.value))
  ) {
    return loanAmount * parseFloat(config.desired_fee_percentage.value);
  }
  return undefined;
};

export const getTotalRevenueShare = (
  loanAmount: number | undefined,
  config: ILoanConfig | undefined,
) => {
  if (
    loanAmount &&
    config &&
    Number.isFinite(parseFloat(config.desired_fee_percentage.value))
  ) {
    const fee = loanAmount * parseFloat(config.desired_fee_percentage.value);
    return loanAmount + fee;
  }
  return undefined;
};

export const getTransfers = (
  revenueAmount: number | undefined,
  loanAmount: number | undefined,
  revenueSharedFrequency: string,
  config: ILoanConfig | undefined,
) => {
  if (
    loanAmount &&
    revenueAmount &&
    revenueSharedFrequency &&
    config &&
    Number.isFinite(parseFloat(config.desired_fee_percentage.value))
  ) {
    const time = revenueSharedFrequency === 'monthly' ? 12 : 52;
    const totalRevenueShare = getTotalRevenueShare(
      loanAmount,
      config,
    ) as number;

    const repaymentRate = getRepaymentRate(revenueAmount, loanAmount) as number;

    return Math.ceil(
      ((totalRevenueShare * time) / revenueAmount / repaymentRate) * 100,
    );
  }
  return '';
};

export const getCompletionDate = (
  revenueAmount: number | undefined,
  loanAmount: number | undefined,
  revenueSharedFrequency: string,
  desiredRepaymentDelay: string,
  config: ILoanConfig | undefined,
) => {
  if (
    loanAmount &&
    revenueAmount &&
    revenueSharedFrequency &&
    desiredRepaymentDelay &&
    config &&
    Number.isFinite(parseFloat(config.desired_fee_percentage.value))
  ) {
    const transfers = getTransfers(
      loanAmount,
      revenueAmount,
      revenueSharedFrequency,
      config,
    );
    const delay = Number(desiredRepaymentDelay.slice(0, 2));
    if (Number.isNaN(delay)) return '';
    const time = revenueSharedFrequency === 'monthly' ? 30 : 7;
    const completionDate = addDays(
      new Date(),
      (transfers as number) * time + delay,
    );
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    return completionDate.toLocaleDateString('en-US', options);
  }
  return '';
};

export const addDays = (date: Date, days: number) => {
  date.setDate(date.getDate() + days);
  return date;
};
