import React from 'react';
import { Content, LeftContent, RightContent, StatusTask } from './style';
import { StarPriority } from './StarPriority';
import { Trash } from './Trash';
import { DotsMenu } from './DotsMenu';

export const FooterTask = () => {
  return (
    <Content>
      <LeftContent>
        <StatusTask>Complete</StatusTask>
      </LeftContent>

      <RightContent>
        <StarPriority />

        <Trash />

        <DotsMenu />
      </RightContent>
    </Content>
  );
};
