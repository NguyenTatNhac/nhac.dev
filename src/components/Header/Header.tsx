'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

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

  const isPathActive = (hrefToCheck: string): boolean => {
    return pathname === hrefToCheck;
  };

  return (
    <header className="sticky top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
    </header>
  );
};

export default Header;
