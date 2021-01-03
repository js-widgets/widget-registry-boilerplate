import React from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';

const AppHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Widget Catalog">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="JS Widgets">
          Widget Catalog
        </HeaderName>
        <HeaderNavigation aria-label="Widget Catalog">
          <HeaderMenuItem element={Link} to="/widget-types">
            Widget Types
          </HeaderMenuItem>
        </HeaderNavigation>
        <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="/widget-types">
                Widget Types
              </HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar />
      </Header>
    )}
  />
);

export default AppHeader;
