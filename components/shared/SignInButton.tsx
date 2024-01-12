import { Button } from '../ui/button';
import Link from 'next/link';

const SignInButton = () => {
  return (
      <Button asChild size='lg' className='rounded-full'>
        <Link href='/sign-in'>Login</Link>
      </Button>
  );
};

export { SignInButton };
