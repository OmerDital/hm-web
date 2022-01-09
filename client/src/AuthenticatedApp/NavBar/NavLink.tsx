import { Button, useTheme } from '@mui/material';
import {
  LinkProps, useMatch, useResolvedPath,
} from 'react-router-dom';
import { forwardRef } from 'react';
import CustomLink from '../../components/CustomLink';

const CustomNavLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, to, ...props }: LinkProps, ref) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname });
    const theme = useTheme();

    return (
      <CustomLink
        to={to}
        ref={ref}
        {...props}
        style={{
          backgroundColor: match
            ? theme.palette.background.default : theme.palette.primary.main
        }}
      >
        {children}
      </CustomLink>
    );
  }
);

const NavLink = ({ children, to }: LinkProps) => (
  <Button
    variant='contained'
    component={CustomNavLink}
    to={to}
    sx={{ boxShadow: 'none' }}
  >
    {children}
  </Button>
);

export default NavLink;