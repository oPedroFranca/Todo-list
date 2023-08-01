import React, { useContext, useState, useEffect } from 'react';
import {
  CloseIcon,
  CloseSpan,
  DeleteModalContent,
  DeleteModalDiv,
  DoneIcon,
  DoneSpan,
} from './style';
import { ModalContext } from '../../context/ModalContext';
import { CollectionTaskContext } from '../../context/ColectionTaskContext';
import { useSpring, animated } from 'react-spring';

export const DeleteTaskModal = () => {
  const { closeDeleteTaskModal, taskClicked } = useContext(ModalContext);
  const { removeTask } = useContext(CollectionTaskContext);

  const [visible, setVisible] = useState(true);

  const animationProps = useSpring({
    opacity: visible ? 1 : 0,
    from: { opacity: 0 },
    config: { tension: 100, friction: 20 },
    onRest: () => {
      if (!visible) {
        closeDeleteTaskModal();
      }
    },
  });

  // useEffect to automatically close the modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseClick = () => {
    setVisible(false);
  };

  const handleDoneClick = () => {
    removeTask(taskClicked);
    setVisible(false);
  };

  return (
    <animated.div style={animationProps}>
      <DeleteModalDiv>
        <DeleteModalContent>
          <p>Delete</p>

          <CloseSpan onClick={handleCloseClick}>
            <CloseIcon />
          </CloseSpan>
          <DoneSpan onClick={handleDoneClick}>
            <DoneIcon />
          </DoneSpan>
        </DeleteModalContent>
      </DeleteModalDiv>
    </animated.div>
  );
};
