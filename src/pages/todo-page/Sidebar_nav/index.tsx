import React from 'react';
import { UserProfile } from '../../../components/UserProfile/index.js';
import { StyledSidebar_nav } from './style.js';

export function Sidebar_nav() {
  return (
    <StyledSidebar_nav>
      <UserProfile />
    </StyledSidebar_nav>
  );
}
