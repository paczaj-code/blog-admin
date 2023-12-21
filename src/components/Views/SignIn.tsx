import { SignIn } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();
  if (isSignedIn) {
    navigate('/home');
  }

  return (
    <div className="min-w-full min-h-screen grid justify-center pt-10">
      <SignIn path="/" routing="path" signUpUrl="/" redirectUrl="/home" />
    </div>
  );
};

export default SignInPage;
