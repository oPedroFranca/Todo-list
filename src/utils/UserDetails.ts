export let userDetails = {
  firstName: 'User',
  selectedIcon: '/public/icon_user/icon_apple.png',
};

export const disgreta = (firstName: string, selectedIcon: string) => {
  userDetails = {
    firstName,
    selectedIcon,
  };
  localStorage.setItem('userDetails', JSON.stringify(userDetails));
};
