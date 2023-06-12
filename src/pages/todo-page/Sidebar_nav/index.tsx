import React, { useState } from 'react';
import { UserProfile } from '../../../components/UserProfile/index.js';
import {
  ArrowLeft,
  ArrowRight,
  HideSidebarButton,
  SidebarButton,
  StyledSidebar_nav,
} from './style.js';

export function Sidebar_nav() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <StyledSidebar_nav className={!isSidebarVisible ? 'hide' : ''}>
        <UserProfile />
      </StyledSidebar_nav>
      <SidebarButton onClick={toggleSidebar}>
        <HideSidebarButton>
          <ArrowRight show={!isSidebarVisible} />
          <ArrowLeft show={isSidebarVisible} />
        </HideSidebarButton>
      </SidebarButton>
    </>
  );
}
