import React from 'react';
import './style';
import { FirstSlideDiv } from './style';

export const FirstSlide = () => {
  return (
    <FirstSlideDiv>
      <img src="public/icons/Hello-Person.png" alt="" />
      <div>
        <h1>
          <h1>Welcome</h1> to my project
          <h1>!</h1>
        </h1>
        <p>
          Hi, thanks for choosing my project from the to-do list! With it, you
          can manage your tasks easily and quickly. Hope this helps you get
          organized and increase your productivity.
        </p>
      </div>
    </FirstSlideDiv>
  );
};
