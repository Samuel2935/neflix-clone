import React, { useEffect, useState } from 'react';
import { SignedIn, SignedOut, UserButton, useClerk } from '@clerk/clerk-react';

function SignUpButton() {
  const clerk = useClerk();

  return (
    <button className="sign-up-btn" onClick={() => clerk.openSignUp({})}>
      Sign up
    </button>
  );
}

function SignInButton() {
  const clerk = useClerk();

  return (
    <button className="sign-in-btn" onClick={() => clerk.openSignIn({})}>
      Sign in
    </button>
  );
}

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_wrapper">
        <h2 className="nav_logo">NETFLIX</h2>

        <nav className="nav_bar">
          <SignedOut>
            <ul>
              <li>
                <SignUpButton />
              </li>

              <li>
                <SignInButton />
              </li>
            </ul>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </div>
    </div>
  );
}
