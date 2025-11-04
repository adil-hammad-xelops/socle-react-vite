import { Link, useLocation } from 'react-router-dom';
import { NavContainer, NavList, NavItem, NavButton } from './NavigationMenu.styled';
import type { MenuItem } from './types';

// Re-export for convenience
export type { MenuItem };

interface NavigationMenuProps {
  items: MenuItem[];
}

/**
 * Navigation Menu Component
 * Displays horizontal navigation with visual feedback for available/pending pages
 */
export function NavigationMenu({ items }: NavigationMenuProps) {
  const location = useLocation();

  return (
    <NavContainer>
      <NavList>
        {items.map((item) => (
          item.available ? (
            <NavItem key={item.path}>
              <Link to={item.path} style={{ textDecoration: 'none' }}>
                <NavButton $isActive={location.pathname === item.path}>
                  {item.label}
                </NavButton>
              </Link>
            </NavItem>
          ) : (
            <NavItem key={item.path}>
              <NavButton
                as="button"
                $isDisabled
                disabled
                title="Page pending refactoring"
              >
                {item.label} ⏳
              </NavButton>
            </NavItem>
          )
        ))}
      </NavList>
    </NavContainer>
  );
}

