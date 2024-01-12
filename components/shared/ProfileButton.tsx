import { UserButton } from '@clerk/nextjs';

const ProfileButton = () => {
  return (
      <UserButton afterSignOutUrl='/' />
  );
};

export { ProfileButton };
