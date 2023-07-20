// Get the current date in the format YYYY-MM-DD
function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Get the number of consecutive days the user accessed the application
function getStackDaysCount() {
  const currentDate = getCurrentDate();
  const lastAccessDate = localStorage.getItem('lastAccessDate');
  let stackDaysCount = parseInt(
    localStorage.getItem('stackDaysCount') || '0',
    10,
  );

  if (!lastAccessDate || lastAccessDate !== currentDate) {
    // If the last access date is different from the current date, reset the counter.
    stackDaysCount = 0;
  }

  return stackDaysCount;
}

// Update the number of consecutive days and save the current date in local storage
function updateStackDaysCount() {
  const currentDate = getCurrentDate();
  const lastAccessDate = localStorage.getItem('lastAccessDate');
  let stackDaysCount = parseInt(
    localStorage.getItem('stackDaysCount') || '0',
    10,
  );

  if (!lastAccessDate || lastAccessDate !== currentDate) {
    // If the last access date is different from the current date, check if it's a consecutive day.
    if (lastAccessDate && isConsecutiveDay(lastAccessDate, currentDate)) {
      stackDaysCount++;
    } else {
      // Otherwise, reset the counter.
      stackDaysCount = 0;
    }
  }

  // Update the dates and the counter in local storage.
  localStorage.setItem('lastAccessDate', currentDate);
  localStorage.setItem('previousAccessDate', lastAccessDate || currentDate);
  localStorage.setItem('stackDaysCount', stackDaysCount.toString());

  return stackDaysCount;
}

// Check if the previous date is the day before the current date.
function isConsecutiveDay(previousDate: string, currentDate: string) {
  const prevDate = new Date(previousDate);
  const currDate = new Date(currentDate);
  prevDate.setDate(prevDate.getDate() + 1);

  return (
    prevDate.getFullYear() === currDate.getFullYear() &&
    prevDate.getMonth() === currDate.getMonth() &&
    prevDate.getDate() === currDate.getDate()
  );
}

export { getCurrentDate, getStackDaysCount, updateStackDaysCount };
