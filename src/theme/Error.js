// TCAdmin: replaces @docusaurus/core's theme-fallback Error (the whole-app crash fallback).
// The stock version first retries inside <Layout>, which needs core's private route context;
// this fallback is only reached when the layout (navbar, sidebar…) is what crashed, so it goes
// straight to a self-contained screen that depends on no layout-level providers.
import React from 'react';
import Head from '@docusaurus/Head';
import ErrorScreen from '@site/src/components/ErrorScreen';

export default function Error({error, tryAgain}) {
  return (
    <>
      <Head>
        <title>Page Error</title>
      </Head>
      <ErrorScreen error={error} tryAgain={tryAgain} standalone />
    </>
  );
}
