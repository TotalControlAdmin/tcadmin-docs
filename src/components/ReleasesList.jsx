import React from "react";
import Link from "@docusaurus/Link";
import { usePluginData } from "@docusaurus/useGlobalData";

// Absolute links: a relative "./<slug>" resolves to /3/<slug> when the index is
// reached as /3/releases (no trailing slash).
export default function ReleasesList() {
  const { releases } = usePluginData("releases-data-plugin");

  return (
    <div className="releases-grid">
      {releases.map(({ id, title, date, description, slug }) => (
        <Link key={id} to={`/3/releases/${slug}`} className="release-card">
          <div className="release-card__version">{title}</div>
          {date && (
            <div className="release-card__date">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </div>
          )}
          <div className="release-card__summary">{description}</div>
        </Link>
      ))}
    </div>
  );
}
