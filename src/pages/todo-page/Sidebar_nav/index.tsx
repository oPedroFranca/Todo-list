import React, { useEffect, useState } from 'react';
import { UserProfile } from '../../../components/UserProfile/index.js';
import {
  Arrow,
  DivTodoListLogo,
  HideSidebarButton,
  SidebarDiv,
  StyledSidebar_nav,
  SidebarContent,
} from './style.js';
import { DetailsTaskStatus } from '../../../components/DetailsTasksStatus/index.js';
import { CategoriesTab } from '../../../components/CategoriesTab/index.js';
import { FooterSideBar } from '../../../components/FooterSideBar/index.js';

export function Sidebar_nav() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isLessThanNineHundred, setLessThanNineHundred] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    const arrowRight = document.querySelector('.ArrowRight');
    if (arrowRight) {
      arrowRight.classList.toggle('rotate');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setIsSidebarVisible(false);
        setLessThanNineHundred(true);
      } else {
        setIsSidebarVisible(true);
        setLessThanNineHundred(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SidebarContent
      className={`${!isSidebarVisible ? 'hide' : ''} ${
        isLessThanNineHundred ? 'lessthanSinehundred' : ''
      }`}
    >
      <StyledSidebar_nav>
        <DivTodoListLogo>
          <img src="public/icons/nuvem-icon-logo.png" alt="" />
          <p>TO-DO LIST</p>
        </DivTodoListLogo>
        <UserProfile />

        <DetailsTaskStatus />

        <CategoriesTab />

        <FooterSideBar />
      </StyledSidebar_nav>

      <SidebarDiv onClick={toggleSidebar}>
        <HideSidebarButton>
          <Arrow className="ArrowRight" show={!isSidebarVisible} />
        </HideSidebarButton>
      </SidebarDiv>
    </SidebarContent>
  );
}
