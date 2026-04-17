import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef, memo } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLinkComponent = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...restProps }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }
        {...restProps}
      />
    );
  }
);

NavLinkComponent.displayName = "NavLink";

export const NavLink = memo(NavLinkComponent);