// TCAdmin: wraps @docusaurus/theme-classic's NavbarItem/ComponentTypes to register the
// custom top-bar items used in docusaurus.config.js (navbar.items).
import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import SectionLinks from '@site/src/components/navbar/SectionLinks';
import LatestBuild from '@site/src/components/navbar/LatestBuild';

export default {
  ...ComponentTypes,
  'custom-sectionLinks': SectionLinks,
  'custom-latestBuild': LatestBuild,
};
