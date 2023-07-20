import React, { useEffect, useState } from 'react';
import { FireIcon, NumberDays, StackDaysComponent } from './style';
import { updateStackDaysCount } from './utils';

export function StackDays() {
  const [stackDaysCount, setStackDaysCount] = useState(0);

  useEffect(() => {
    // Update the stackDaysCount on component mount
    setStackDaysCount(updateStackDaysCount());
  }, []);

  // Function to reset the stackDaysCount to 0

  return (
    <StackDaysComponent>
      <p>Days</p>
      <FireIcon />
      <NumberDays>{stackDaysCount}</NumberDays>
    </StackDaysComponent>
  );
}
