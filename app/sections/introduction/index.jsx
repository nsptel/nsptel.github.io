'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { WelcomeAnimation } from './IntroAnimation';
import { useScrollTo } from '@/_hooks';
import { useMediaQuery } from '@/_utils';

export function WelcomeSection() {
  const ref = useRef(null);
  const introRef = useRef(null);
  const { scrollToEl } = useScrollTo();
  const isTabletUp = useMediaQuery('min-width: 768px');

  const [count, setCount] = useState(0);
  const [text] = useState([
    'build robust back-end APIs',
    'create enterprise-level software solutions',
    'build UI using modern JS frameworks',
    'develop websites',
  ]);

  const onClick = (e) => scrollToEl(e);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);

      if (count === 3) {
        setCount(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <section id="intro" className="section" ref={introRef}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center">
        <div className="py-5 md:py-10">
          <h1
            tabIndex="0"
            ref={ref}
            className="text-3xl md:text-5xl xl:text-6xl font-bold"
          >
            <p>
              Hi, I&apos;m <span className="text-primary">Nilkumar (Neel)</span>{' '}
              a <span className="text-primary">passionate</span> software
              engineer.
            </p>
          </h1>

          <div className="mt-3 relative flex flex-col overflow-hidden">
            <p
              ref={ref}
              className="text-[17px] md:text-2xl transform-none opacity-100"
            >
              I
              <span
                className="absolute flex flex-col transition-all duration-500 ease-in-expo"
                style={{
                  top:
                    count === 0
                      ? '0'
                      : count === 1
                      ? '-100%'
                      : count === 2
                      ? '-200%'
                      : count === 3
                      ? '-300%'
                      : '0',
                  left: '13px',
                }}
              >
                {text.map((element) => (
                  <TextElement key={element} element={element} />
                ))}
              </span>
            </p>
          </div>

          <p
            tabIndex="0"
            ref={ref}
            className="mt-3 mb-10 text-gray-500 text-xl"
          >
            Stick around to see some of my work.
          </p>
          <div ref={ref}>
            <Link
              href="#projects"
              onClick={onClick}
              tabIndex="0"
              className="btn btn-primary"
              aria-label="projects"
            >
              See some of my projects
            </Link>
          </div>
        </div>

        {isTabletUp && <WelcomeAnimation />}
      </div>
    </section>
  );
}

function TextElement({ element }) {
  const firstWord = <b>{element.split(' ').at(0)}</b>;
  const restWords = element.split(' ').slice(1).join(' ');
  const ref = useRef(null);

  return (
    <span tabIndex="0" ref={ref} className="text-[17px] md:text-2xl">
      {firstWord} {restWords}
    </span>
  );
}
