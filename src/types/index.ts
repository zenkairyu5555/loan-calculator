export type IConfig = {
  name: string;
  value: string;
  placeholder: string;
  tooltip: string;
  options?: string[];
};

export type ILoanConfig = Record<string, IConfig>;
