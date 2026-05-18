import React from "react";
import { usePluginData } from "@docusaurus/useGlobalData";

export default function ReleasesList() {
  const { releases } = usePluginData("releases-data-plugin");

  return (
    <div className="releases-grid">
      {releases.map(({ id, title, date, description, slug }) => (
        <a key={id} href={`./${slug}`} className="release-card">
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
        </a>
      ))}
    </div>
  );
}
