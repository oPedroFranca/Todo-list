import React, { useState } from 'react';
import { FireIcon, NumberDays, StackDaysComponent } from './style';

export function StackDays() {
  const StackDaysCount = 8;

  return (
    <StackDaysComponent>
      <p>Stack</p>
      <FireIcon />
      <NumberDays>{StackDaysCount}</NumberDays>
    </StackDaysComponent>
  );
}
