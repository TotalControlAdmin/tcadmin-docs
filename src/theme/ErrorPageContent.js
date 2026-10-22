// TCAdmin: replaces @docusaurus/theme-classic's ErrorPageContent (a page crashed inside the
// layout) with the shared crash screen: status chip, actions, and the error in a console plate.
import React from 'react';
import ErrorScreen from '@site/src/components/ErrorScreen';

export default function ErrorPageContent({error, tryAgain}) {
  return <ErrorScreen error={error} tryAgain={tryAgain} />;
}
