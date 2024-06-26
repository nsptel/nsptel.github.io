'use client';

import { Logo, Menu, ConnectMedia } from '@/_components';
import { BsGrid } from 'react-icons/bs';

export function AppHeader() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-inherit shadow-sm">
        <div>
          <div className="container-md navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn mr-1 hover:text-primary btn-ghost lg:hidden"
                >
                  <BsGrid />
                </div>
                <Menu isMobile={true} />
              </div>
              <Logo />
            </div>
            <div className="navbar-center hidden lg:flex">
              <nav>
                <Menu />
              </nav>
            </div>
            <div className="navbar-end">
              <ConnectMedia />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
