'use client';

import { useEffect, useRef } from 'react';

const TimeLineData = [
  {
    year: 2023,
    title: 'Fullstack Engineer (Angular, Django, MySQL, AWS)',
    description:
      'Now that I had initial exposure to how the software systems \
    operate for a large-scale product, I moved on to the next part of my journey\
    at SimplifyVMS. Being a full-stack engineer, I got hands-on experience \
    working with some cutting-edge technologies here. This has been a challenging, \
    yet rewarding role so far.',
  },
  {
    year: 2021,
    title: 'Software Engineer (EmberJS, Flask, GCP)',
    description:
      'So, officially, my engineering journey began in 2021 as a Software Engineer where \
    I learned all about SDLC, applied my knowledge and skills contributing in \
    the building of an enterprise-level software product. \
    I continued with this work for almost 1.5 years.',
  },
  {
    year: 2020,
    title: 'Diploma in ICT',
    description:
      'After getting the fundamentals right, I wanted to focus on a \
    specific part of the industry with this diploma in ICT, which helped me master \
    some advanced concepts in web development and programming in general.',
  },
  {
    year: 2015,
    title: "Bachelor's in Computer Engineering",
    description:
      "I started my journey by opting for Computer Engineering for my \
    Bachelor's in Gujarat Technological University. During my university years, \
    I developed a deep passion for software programming, and I consistently \
    engaged in learning new concepts and techniques in this field.",
  },
];

export function TimeLine() {
  const carouselRef = useRef(null);

  const scroll = (node, left) => {
    return node?.scrollTo({ left, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ul className="mt-12 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {TimeLineData.map((data, index) => (
        <li key={index}>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="oklch(var(--p))"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={
              index % 2
                ? 'timeline-end mb-10'
                : 'timeline-start mb-10 pb-10 md:text-end md:pb-0'
            }
          >
            <time className="font-mono italic">{data.year}</time>
            <div className="text-lg font-black">{data.title}</div>
            {data.description}
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );
}
