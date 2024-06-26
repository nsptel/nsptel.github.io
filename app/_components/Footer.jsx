'use client';

import { useRef } from 'react';
import { ConnectMedia, ScrollTop } from '@/_components';

export function AppFooter() {
  const footerRef = useRef(null);
  const year = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="container-md py-10 mt-5 relative before:absolute before:top-0 before:left-4 before:w-[calc(100%-16px)] before:h-[1px] before:bg-gray-100"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5">
        <p className="font-light">Copyright &copy; {year} Nilkumar Patel</p>
        <ScrollTop />
      </div>
    </footer>
  );
}
