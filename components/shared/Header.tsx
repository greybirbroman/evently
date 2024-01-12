import { Logo } from './Logo';
import { SignInButton } from './SignInButton';
import { ProfileButton } from './ProfileButton';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { DesctopNav } from './DesctopNav';
import { MobileNav } from './MobileNav';

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex items-center justify-between'>
        <Logo />
        {/* {DESCTOP WITH AUTH} */}
        <SignedIn>
          <DesctopNav />
        </SignedIn>
        <div className='flex w-32 justify-end gap-3'>
          {/* {MOBILE WITH AUTH} */}
          <SignedIn>
            <ProfileButton />
            <MobileNav />
          </SignedIn>
          {/* {NOT AUTH} */}
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
