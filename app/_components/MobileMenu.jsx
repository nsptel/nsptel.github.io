'use client';

import { useEffect, useState } from 'react';
import { BsGrid } from 'react-icons/bs';
import { ConnectMedia, Menu } from '@/_components';
import { IoMdClose } from 'react-icons/io';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      <button>
        <BsGrid />
      </button>
      {isOpen && (
        <div className="backdrop-blur-md fixed left-0 right-0 top-0 min-h-screen z-50">
          <header className="p-6 flex items-center justify-between border-b border-b-brand-light z-10">
            <ConnectMedia />
            <button
              onClick={onClose}
              className="w-10 h-10 inline-flex items-center justify-center"
            >
              <IoMdClose size="24" />
            </button>
          </header>
          <div className="px-6 py-10">
            <Menu onClick={onClose} />
          </div>
        </div>
      )}
    </>
  );
}
