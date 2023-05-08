import { styled } from '@mui/system';
import LogoIcon from '../../icons/Logo';

const Root = styled('div')({
  color: '#000000',
  backgroundColor: 'transparent',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  width: '173px',
  height: '65px',
  transform: 'rotate(-90deg)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#c4c4c4',
  borderTop: 'none',
  position: 'fixed',
  top: '40%',
  left: '-54px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '14px',
});

const PoweredByNed: React.FC<{}> = () => {
  return (
    <Root>
      Powered by &nbsp;<LogoIcon />
    </Root>
  );
};

export default PoweredByNed;
