import React from 'react';
import { User_profile } from '../../../components/UserProfile/index.js';
import { StyledSidebar_nav } from './style.js';

export function Sidebar_nav() {
  return (
    <StyledSidebar_nav>
      <User_profile />
    </StyledSidebar_nav>
  );
}
