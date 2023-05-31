export type IConfig = {
  name: string;
  value: string;
  placeholder: string;
  tooltip: string;
  options?: string[];
};

export type ILoanConfig = Record<string, IConfig>;

export type IOptionState = {
  revenue_amount?: number;
  loan_amount?: number;
  revenue_shared_frequency?: string;
  desired_repayment_delay?: string;
}