import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoIcon from '../../icons/Logo';

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.07)',
        height: '86px',
        paddingTop: '10px',
        backgroundColor: '#ffffff',
      }}
    >
      <Toolbar>
        <LogoIcon />
      </Toolbar>
    </AppBar>
  );
}
