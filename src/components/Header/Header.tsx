import React, { ReactNode } from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <NavigationLink href="/about">About</NavigationLink>
        <NavigationLink href="/cv">CV</NavigationLink>
        <NavigationLink href="/projects">Projects</NavigationLink>
      </div>
    </header>
  );
};

type NavigationLinkProps = {
  children: ReactNode;
  href: string;
};

const NavigationLink = ({ href, children }: NavigationLinkProps) => {
  return (
    <Link
      href={href}
      className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
    >
      {children}
    </Link>
  );
};

export default Header;
