import React from 'react';
import { User_profile } from '../../../components/UserProfile/index.js';
import { StyledSidebar_nav } from './style.js';
const firstName = localStorage.getItem('firstName');
const selectedIcon = localStorage.getItem('selectedIcon');

export function Sidebar_nav() {
  return (
    <StyledSidebar_nav>
      <User_profile name={firstName} icon={selectedIcon} />
    </StyledSidebar_nav>
  );
}
