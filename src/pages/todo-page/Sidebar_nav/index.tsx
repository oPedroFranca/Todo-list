import React, { useState } from 'react';
import { UserProfile } from '../../../components/UserProfile/index.js';
import {
  Arrow,
  HideSidebarButton,
  SidebarDiv,
  StyledSidebar_nav,
} from './style.js';

export function Sidebar_nav() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    const arrowRight = document.querySelector('.ArrowRight');
    if (arrowRight) {
      arrowRight.classList.toggle('rotate');
    }
  };

  return (
    <>
      <StyledSidebar_nav className={!isSidebarVisible ? 'hide' : ''}>
        <UserProfile />
      </StyledSidebar_nav>
      <SidebarDiv onClick={toggleSidebar}>
        <HideSidebarButton>
          <Arrow className="ArrowRight" show={!isSidebarVisible} />
        </HideSidebarButton>
      </SidebarDiv>
    </>
  );
}
