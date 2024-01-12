import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './Logo';
import { NavItems } from './NavItems';
import Image from 'next/image';
import { Separator } from '../ui/separator';

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
      <Sheet>
        <SheetTrigger className='align-middle'>
          <Image
            src='/assets/icons/menu.svg'
            alt='Menu, Burger, Icon'
            width={24}
            height={24}
            className='cursor-pointer'
          />
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
          <Logo />
          <Separator className='border border-gray-50' />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export { MobileNav };
