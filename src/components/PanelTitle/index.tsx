import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import theme from '../../theme';

const PanelTitle = styled(Typography)(() => ({
  fontSize: '30px',
  fontWeight: 700,
  marginBottom: '36px',
  [theme.breakpoints.down(650)]: {
    fontSize: '24px',
    fontWeight: 600,
    marginBottom: '30px',
  },
}));

export default PanelTitle;
