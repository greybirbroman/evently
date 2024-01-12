import { NavItems } from './NavItems';

const DesctopNav = () => {
  return (
    <nav className='hidden md:flex-between w-full max-w-xs'>
      <NavItems />
    </nav>
  );
};

export { DesctopNav };
