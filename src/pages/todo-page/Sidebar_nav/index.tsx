import React, { useState } from 'react';
import { UserProfile } from '../../../components/UserProfile/index.js';
import {
  Arrow,
  DivTodoListLogo,
  HideSidebarButton,
  SidebarDiv,
  StyledSidebar_nav,
} from './style.js';
import { DetailsTaskStatus } from '../../../components/DetailsTasksStatus/index.js';

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
        <DivTodoListLogo>
          <img src="public/icons/nuvem-icon-logo.png" alt="" />
          <p>TO-DO LIST</p>
        </DivTodoListLogo>
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
