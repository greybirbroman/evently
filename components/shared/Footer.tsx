import { Logo } from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col sm:flex-row gap-4 p-5 text-center'>
        <Logo />
        <p>{currentYear} Evently. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
