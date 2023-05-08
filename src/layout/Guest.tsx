import { FC } from 'react';
import Box from '@mui/material/Box';
import Header from '../components/Headers/GuestHeader';
import PoweredByNed from '../components/PoweredByNed';

type Props = {
  children?: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        background: '#f9f9f9',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <PoweredByNed />
      <>{children}</>
    </Box>
  );
};

export default Layout;
