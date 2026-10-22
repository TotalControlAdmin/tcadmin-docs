import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./ErrorScreen.module.css";

// Crash screen for src/theme/Error.js (whole-app fallback, rendered when the layout
// itself failed) and src/theme/ErrorPageContent.js (a page crashed inside the layout).
// The standalone variant must not depend on layout-level providers (colour mode, route
// context), so it uses no theme hooks: logos swap on [data-theme] in CSS instead.

function errorChain(error) {
  const chain = [];
  for (let e = error; e && chain.length < 10; e = e.cause) chain.push(e);
  return chain;
}

// Light-touch highlighting in the console palette: quoted strings green, the rest plain.
function highlight(text) {
  return String(text)
    .split(/("[^"\n]*")/g)
    .map((part, i) =>
      part.startsWith('"') && part.endsWith('"') && part.length > 1 ? (
        <span key={i} className={styles.str}>
          {part}
        </span>
      ) : (
        part
      ),
    );
}

export function ErrorConsole({ error }) {
  const chain = errorChain(error);
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const stack = chain[chain.length - 1]?.stack;

  return (
    <div className={styles.console}>
      <div className={styles.bar}>
        <span className={styles.dots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={styles.path}>{path ? `${path} // render` : "render"}</span>
        <span className={styles.tag}>Error</span>
      </div>
      <pre className={styles.body}>
        <code>
          {chain.map((e, i) => (
            <span key={i} className={styles.entry}>
              <span className={i === 0 ? styles.level : styles.cause}>{i === 0 ? "error" : "caused by"}</span>
              {highlight(e?.message ?? e)}
            </span>
          ))}
        </code>
      </pre>
      {stack && (
        <details className={styles.stack}>
          <summary>Stack trace</summary>
          <pre>
            <code>{stack}</code>
          </pre>
        </details>
      )}
    </div>
  );
}

export default function ErrorScreen({ error, tryAgain, standalone = false }) {
  const home = useBaseUrl("/");
  const lightLogo = useBaseUrl("/img/tcadmin-logo.png");
  const darkLogo = useBaseUrl("/img/TCAdmin_White.png");

  return (
    <main className={clsx(styles.screen, standalone && styles.standalone)}>
      <div className={styles.inner}>
        {standalone && (
          <a href={home} className={styles.logo}>
            <img src={lightLogo} alt="TCAdmin" className={styles.logoLight} />
            <img src={darkLogo} alt="TCAdmin" className={styles.logoDark} />
          </a>
        )}

        <div className={styles.meta}>
          <span className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            Crashed
          </span>
          <span className={styles.mono}>Render failure // Client</span>
        </div>

        <h1 className={styles.title}>This page crashed</h1>
        <p className={styles.lead}>
          Something went wrong while rendering this page. Try again, or head back to the docs home. If it keeps
          happening, the details below will help us track it down.
        </p>

        <div className={styles.actions}>
          <button type="button" className="button button--primary" onClick={tryAgain}>
            Try again
          </button>
          <a href={home} className="button button--secondary button--outline">
            Back to docs
          </a>
        </div>

        <ErrorConsole error={error} />
      </div>
    </main>
  );
}
