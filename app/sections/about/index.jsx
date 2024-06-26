'use client';

import { useRef } from 'react';
import { HeadingDivider } from '@/_components';
import { TimeLine } from './TimeLine';
import { BsFillSaveFill } from 'react-icons/bs';

export function AboutSection() {
  const ref = useRef(null);

  return (
    <section id="about" className="section">
      <HeadingDivider title="About me" className="mb-24" />

      <TimeLine />

      <div ref={ref} className="pt-10">
        <a
          href="/assets/Resume.pdf"
          tabIndex="0"
          className="btn btn-primary btn-outline"
          aria-label="Latest projects"
          rel="noreferrer"
          download
        >
          Download My Resume &nbsp; <BsFillSaveFill />
        </a>
      </div>
    </section>
  );
}
