import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/' className='w-36'>
      <Image
        src='/assets/images/logo.svg'
        width={128}
        height={38}
        alt='Evently, Logo'
      />
    </Link>
  );
};

export { Logo };
