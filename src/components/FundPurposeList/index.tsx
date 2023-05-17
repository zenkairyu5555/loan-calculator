import { useState, ChangeEvent } from 'react';
import {
  FormGroup,
  FormLabel,
  TextField,
  Typography,
  Stack,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';

import SelectVariants from '../SelectVariants';
import BinIcon from '../../icons/Bin';
import AddIcon from '../../icons/Add';
import theme from '../../theme';

const purposeOptions = [
  'Marketing',
  'Personnel',
  'Working Capital',
  'Inventory',
  'Machinery/Equipment',
  'Other',
];

type IPurpose = {
  id: number;
  purpose: string;
  description: string;
  amount: number;
};

const FundPurposeList = () => {
  const [purposeValue, setPurposeValue] = useState<string>();
  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<number>();
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
    setAmount(parseInt(event.target.value));
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
          options={purposeOptions}
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
          type="number"
          value={amount}
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
            <Stack
              sx={{
                width: '157px',
                paddingLeft: '9px',
                [theme.breakpoints.down(700)]: {
                  width: '100%',
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  lineHeight: '24px',
                }}
              >
                {p.purpose}
              </Typography>
            </Stack>
            <Stack
              flex={1}
              sx={{
                paddingLeft: '9px',
                [theme.breakpoints.down(700)]: {
                  width: '100%',
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  lineHeight: '24px',
                }}
              >
                {p.description}
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: '123px',
                paddingLeft: '9px',
                [theme.breakpoints.down(700)]: {
                  width: '100%',
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  lineHeight: '24px',
                }}
              >
                {p.description}
              </Typography>
            </Stack>
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
