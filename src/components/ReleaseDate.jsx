import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export default function ReleaseDate() {
  const { frontMatter } = useDoc();
  if (!frontMatter.date) return null;

  const date = frontMatter.date instanceof Date
    ? frontMatter.date
    : new Date(frontMatter.date + 'T00:00:00');

  return (
    <p>
      {date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })}
    </p>
  );
}
