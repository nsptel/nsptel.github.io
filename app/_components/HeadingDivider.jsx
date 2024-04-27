'use client';

export function HeadingDivider({ title = '' }) {
  return (
    <header className="flex items-center">
      <h2 className="heading-divider">{title}</h2>
    </header>
  );
}
