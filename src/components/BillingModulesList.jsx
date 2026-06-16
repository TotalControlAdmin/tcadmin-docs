import React from "react";

// One card per available billing module. Reuses the Releases grid styles
// (.releases-grid / .release-card in src/css/custom.css) so the boxes match
// the Release Notes page. Add a module by appending to this array.
const MODULES = [
  {
    id: "whmcs",
    name: "WHMCS",
    version: "v1.0.0",
    description:
      "Provision and manage TCAdmin game servers directly from WHMCS — create, suspend, terminate, change passwords, start/stop/restart, and one-click panel login.",
    slug: "whmcs",
  },
];

export default function BillingModulesList() {
  return (
    <div className="releases-grid">
      {MODULES.map(({ id, name, version, description, slug }) => (
        <a key={id} href={`./${slug}`} className="release-card">
          <div className="release-card__version">{name}</div>
          {version && <div className="release-card__date">{version}</div>}
          <div className="release-card__summary">{description}</div>
        </a>
      ))}
    </div>
  );
}
