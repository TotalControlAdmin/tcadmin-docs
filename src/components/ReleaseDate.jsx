import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export default function ReleaseDate() {
  const { frontMatter } = useDoc();
  if (!frontMatter.date) return null;

  // YAML parses an unquoted `date: 2026-09-08` as a timestamp, so this is almost always a Date
  // already — at UTC midnight. Format it in UTC (like ReleasesList does): without the timeZone
  // option toLocaleDateString renders in the BUILD MACHINE's zone, which lands a day early
  // anywhere west of Greenwich and makes the printed date depend on who ran the build.
  const date = frontMatter.date instanceof Date
    ? frontMatter.date
    : new Date(frontMatter.date + 'T00:00:00Z');

  return (
    <p>
      {date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      })}
    </p>
  );
}
