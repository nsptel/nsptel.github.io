'use client';

import { Logo, Menu, ConnectMedia } from '@/_components';
import { BsGrid } from 'react-icons/bs';
import { ThemeSwitcher } from '@/_components';

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
              <span class="font-bold px-5 text-3xl">&#183;</span>
              <div>
                <span className="hover:text-primary text-3xl">
                  <ThemeSwitcher />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
