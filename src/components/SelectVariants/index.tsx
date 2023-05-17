import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';
import { SxProps } from "@mui/system";

const MenuProps = {
  PaperProps: {
    style: {
      borderRadius: '0 0 10px 10px',
      border: '1px solid #C4C4C4',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.07)',
    },
  },
};

const SelectVariants = ({
  options,
  value,
  setValue,
  sx,
}: {
  options: string[];
  value?: string;
  setValue(value: string): void;
  sx?: SxProps;
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <Select
      value={value}
      onChange={handleChange}
      IconComponent={KeyboardArrowDownIcon}
      renderValue={(selected) => selected}
      MenuProps={MenuProps}
      variant="filled"
      sx={{ m: 1, margin: 0, ...sx }}
    >
      {options.map((item) => (
        <MenuItem
          key={item}
          value={item}
          sx={{
            fontSize: '1.125rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <span>{item}</span>
          {item === value && <CheckIcon color="success" />}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectVariants;
