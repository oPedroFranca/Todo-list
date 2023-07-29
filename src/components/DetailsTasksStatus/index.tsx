// DetailsTaskStatus.js

import React from 'react';
import {
  DetailsTaskStatusContent,
  StatusContainer,
  NameNumberStatus,
  NumberStatus,
} from './style';

export const DetailsTaskStatus = () => {
  return (
    <DetailsTaskStatusContent>
      <StatusContainer>
        <NameNumberStatus>All Tasks:</NameNumberStatus>
        <NumberStatus borderColor="#775cd1">110</NumberStatus>
      </StatusContainer>
      <StatusContainer>
        <NameNumberStatus>Completed:</NameNumberStatus>
        <NumberStatus borderColor="#01aa66">42</NumberStatus>
      </StatusContainer>
      <StatusContainer>
        <NameNumberStatus>In progress:</NameNumberStatus>
        <NumberStatus borderColor="#d36728">68</NumberStatus>
      </StatusContainer>
    </DetailsTaskStatusContent>
  );
};
