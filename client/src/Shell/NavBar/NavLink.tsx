import { Button, useTheme } from '@mui/material';
import {
  Link, LinkProps, useMatch, useResolvedPath,
} from 'react-router-dom';
import { forwardRef } from 'react';

const CustomLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, to, ...props }: LinkProps, ref) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname });
    const theme = useTheme();

    return (
      <Link
        style={{
          backgroundColor: match
            ? theme.palette.background.default : theme.palette.primary.main,
        }}
        to={to}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

const NavLink = ({ children, to }: LinkProps) => (
  <Button
    variant='contained'
    component={CustomLink}
    to={to}
    sx={{ boxShadow: 'none' }}
  >
    {children}
  </Button>
);

export default NavLink;