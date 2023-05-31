import { useState, ChangeEvent } from 'react';
import {
  FormGroup,
  FormLabel,
  TextField,
  Typography,
  Stack,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import styled from '@emotion/styled';

import SelectVariants from '../SelectVariants';
import BinIcon from '../../icons/Bin';
import AddIcon from '../../icons/Add';
import theme from '../../theme';
import { formatNumber } from '../../utils';

type IPurpose = {
  id: number;
  purpose: string;
  description: string;
  amount: number;
};

const StyledTypography = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: '1.125rem',
  lineHeight: '24px',
}));

const StyledStack = styled(Stack)(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [theme.breakpoints.down(700)]: {
    width: '100%',
  },
}));

const FundPurposeList = ({ options }: { options: string[] }) => {
  const [purposeValue, setPurposeValue] = useState<string>(options[0]);
  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<number | undefined>();
  const [purposes, setPurposes] = useState<IPurpose[]>([]);

  const handleAdd = () => {
    if (!amount) return;
    const newPurpose: IPurpose = {
      id: new Date().getTime(),
      description: description || '',
      amount,
      purpose: purposeValue || '',
    };
    setPurposes((prev: IPurpose[]) => [...prev, newPurpose]);
  };

  const handleAmount = (event: ChangeEvent<HTMLInputElement>) => {
    let value: any = event.target.value;
    value = value.replace(/\D/g, '');
    value = parseInt(value);
    value = Number.isNaN(value) ? undefined : value;

    setAmount(value);
  };

  const handleDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleRemove = (id: number) => () => {
    setPurposes((prev: IPurpose[]) => {
      const newPurposes = prev.filter((p) => p.id !== id);
      return newPurposes;
    });
  };

  return (
    <FormGroup sx={{ marginBottom: 2 }}>
      <FormLabel id="revenue_amount">
        What will you use for funds for?
      </FormLabel>
      <FormGroup
        sx={{
          margin: '30px 0px 8px 4px',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          [theme.breakpoints.down(700)]: {
            flexDirection: 'column',
          },
          [theme.breakpoints.down(650)]: {
            marginLeft: '0px',
          },
        }}
      >
        <SelectVariants
          options={options}
          value={purposeValue}
          setValue={setPurposeValue}
          sx={{
            [theme.breakpoints.down(700)]: {
              '&.MuiInputBase-root': {
                width: '100% !important',
              },
            },
          }}
        />
        <TextField
          variant="filled"
          value={description}
          onChange={handleDescription}
          placeholder="Description"
          sx={{
            flex: 1,
            [theme.breakpoints.down(700)]: {
              width: '100%',
            },
          }}
        />
        <TextField
          variant="filled"
          value={formatNumber(amount)}
          onChange={handleAmount}
          placeholder="Amount"
          sx={{
            width: '123px',
            [theme.breakpoints.down(700)]: {
              width: '100%',
            },
          }}
        />
        <IconButton onClick={handleAdd} sx={{ width: '46px', height: '46px' }}>
          <AddIcon />
        </IconButton>
      </FormGroup>
      <Stack>
        {purposes.map((p) => (
          <Stack
            key={p.id}
            direction="row"
            gap={2}
            alignItems="center"
            justifyContent="center"
            sx={{
              margin: '30px 0px 8px 4px',
              [theme.breakpoints.down(700)]: {
                flexDirection: 'column',
              },
            }}
          >
            <StyledStack
              sx={{
                width: '157px',
                paddingLeft: '9px',
              }}
            >
              <StyledTypography variant="body1">{p.purpose}</StyledTypography>
            </StyledStack>
            <StyledStack
              flex={1}
              sx={{
                paddingLeft: '9px',
              }}
            >
              <StyledTypography variant="body1">
                {p.description}
              </StyledTypography>
            </StyledStack>
            <StyledStack
              sx={{
                width: '123px',
                paddingLeft: '9px',
              }}
            >
              <StyledTypography variant="body1">
                {`$${formatNumber(p.amount)}`}
              </StyledTypography>
            </StyledStack>
            <IconButton
              onClick={handleRemove(p.id)}
              sx={{ width: '46px', height: '46px' }}
            >
              <BinIcon />
            </IconButton>
          </Stack>
        ))}
      </Stack>
    </FormGroup>
  );
};

export default FundPurposeList;
