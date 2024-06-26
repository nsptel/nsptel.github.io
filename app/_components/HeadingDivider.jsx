'use client';

export function HeadingDivider({ title = '' }) {
  return (
    <header className="flex items-center">
      <h2 className="heading-divider text-primary">{title}</h2>
    </header>
  );
}
