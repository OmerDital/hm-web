import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const CustomLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({
    children, to, style, ...props
  }: LinkProps, ref) => (
    <Link
      style={{
        ...style
      }}
      to={to}
      ref={ref}
      {...props}
    >
      {children}
    </Link>
  )
);

export default CustomLink;