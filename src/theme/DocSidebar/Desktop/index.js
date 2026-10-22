// TCAdmin: ejected from @docusaurus/theme-classic@3.10.2 lib/theme/DocSidebar/Desktop/index.js. Deviations:
// - The stock CollapseButton is replaced by SidebarFooter (version status, help links and the collapse
//   control), pinned under the menu like the panel drawer's account block.
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Logo from '@theme/Logo';
import Content from '@theme/DocSidebar/Desktop/Content';
import SidebarFooter from '@site/src/components/SidebarFooter';
import styles from './styles.module.css';
function DocSidebarDesktop({path, sidebar, onCollapse, isHidden}) {
  const {
    navbar: {hideOnScroll},
    docs: {
      sidebar: {hideable},
    },
  } = useThemeConfig();
  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}>
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
      <Content path={path} sidebar={sidebar} />
      <SidebarFooter onCollapse={hideable ? onCollapse : undefined} />
    </div>
  );
}
export default React.memo(DocSidebarDesktop);
