import { Route, Routes } from 'react-router-dom';
// import {
//   ClerkProvider,
//   SignedIn,
//   SignedOut,
//   RedirectToSignIn,
// } from '@clerk/clerk-react';
// import { dark } from '@clerk/themes';
// import SignInPage from '../Views/SignIn';
import HomePage from '../Views/HomePage';
import PostsPage from '../Views/PostsPage';
import ExersicesPage from '../Views/ExersicesPage';
import TermsPage from '../Views/TermsPage';
import TagsPage from '../Views/TagsPage';
import CategoriesPage from '../Views/CategoriesPage';
// import { plPL } from '@clerk/localizations';
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error('Missing Publishable Key');
}

const appRoutes: { path: string; element: React.ReactNode }[] = [
  { path: '/home', element: <HomePage /> },
  { path: '/posts', element: <PostsPage /> },
  { path: '/exersices', element: <ExersicesPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/tags', element: <TagsPage /> },
  { path: '/categories', element: <CategoriesPage /> },
];

const ClerkProviderWithRoutes = () => {
  // const navigate = useNavigate();
  return (
    <div className="qwdqwd">
      {/* <ClerkProvider
        publishableKey={clerkPubKey}
        navigate={(to) => navigate(to)}
        localization={plPL}
        appearance={{
          baseTheme: dark,
          elements: {
            footer: 'hidden',
            dividerRow: 'hidden',
            // form: 'hidden',
          },
        }}
      > */}
      <Routes>
        {/* <Route path="/" element={<SignInPage />} /> */}
        {appRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
            // <>
            //   <SignedIn>{route.element}</SignedIn>
            //   <SignedOut>
            //     <RedirectToSignIn redirectUrl={'/'} />
            //   </SignedOut>
            // </>
            // }
          />
        ))}
      </Routes>
      {/* </ClerkProvider> */}
    </div>
  );
};

export default ClerkProviderWithRoutes;
