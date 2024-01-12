'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { headerLinks } from '@/constants';

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className='md:flex-between flex items-start w-full flex-col md:flex-row gap-5'>
      {headerLinks.map((item) => {
        
        const isActive = pathname === item.route;

        return (
          <li
            key={item.route}
            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={item.route}>{item.label}</Link>
          </li>
        )

      })}
    </ul>
  );
};

export { NavItems };
