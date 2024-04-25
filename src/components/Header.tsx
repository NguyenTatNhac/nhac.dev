'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import useIsScrollTop from '@/hooks/useIsScrollTop';

type NavItem = {
  name: string;
  href: string;
};

const NavItems: NavItem[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Work',
    href: '/work',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'About',
    href: '/about',
  },
];

const Header = () => {
  const pathname = usePathname();
  const isTop = useIsScrollTop();

  const isPathActive = (hrefToCheck: string): boolean => {
    return pathname === hrefToCheck;
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        {
          'border-b border-border/40': !isTop,
        }
      )}
    >
      <div className="max-w-2xl mx-4 md:mx-auto">
        <div className="flex h-14 items-center justify-end gap-4 text-sm">
          {NavItems.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'transition-colors',
                'hover:text-foreground/80',
                isPathActive(href) ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
