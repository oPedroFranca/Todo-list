// DetailsTaskStatus.js

import React, { useContext } from 'react';
import {
  DetailsTaskStatusContent,
  StatusContainer,
  NameNumberStatus,
  NumberStatus,
} from './style';
import { StatusTaskContext } from '../../context/StatusTasksContext';

export const DetailsTaskStatus = () => {
  const { numberTasks, numberCompleted, numberHighPriority, numberInProgress } =
    useContext(StatusTaskContext);

  return (
    <DetailsTaskStatusContent>
      <StatusContainer>
        <NameNumberStatus>All Tasks:</NameNumberStatus>
        <NumberStatus borderColor="#775cd1">{numberTasks}</NumberStatus>
      </StatusContainer>
      <StatusContainer>
        <NameNumberStatus>Completed:</NameNumberStatus>
        <NumberStatus borderColor="#01aa66">{numberCompleted}</NumberStatus>
      </StatusContainer>
      <StatusContainer>
        <NameNumberStatus>In progress:</NameNumberStatus>
        <NumberStatus borderColor="#d36728">{numberInProgress}</NumberStatus>
      </StatusContainer>
      <StatusContainer>
        <NameNumberStatus>High Priority:</NameNumberStatus>
        <NumberStatus borderColor="#b11b1b">{numberHighPriority}</NumberStatus>
      </StatusContainer>
    </DetailsTaskStatusContent>
  );
};
