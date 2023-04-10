import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IconOptionUser } from './IconOptionUser';
import {
  FormName,
  ModalContent,
  ModalDiv,
  ModalForm,
  ModalHeader,
  ModalHeaderDiv,
  ModalHeaderIcon,
  ModalHeaderInfo,
  ModalHeaderTitle,
  ModalMain,
} from './style';
import { SubmitButtonModal } from './SubmitButton';
import { IconSelected } from './iconSelected';

export const ModalFormUser = () => {
  const [name, setName] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <ModalDiv>
      <ModalContent>
        <ModalHeader>
          <span>
            <ModalHeaderDiv>
              <ModalHeaderIcon src="public/icons/icon-Todo.png" alt="" />
              <ModalHeaderTitle>To-do List.</ModalHeaderTitle>
            </ModalHeaderDiv>

            <ModalHeaderInfo>
              Simplify your daily routine with the help of our intuitive <br />{' '}
              and easy-to-use to-do list.
            </ModalHeaderInfo>
          </span>
        </ModalHeader>
        <ModalMain>
          <ModalForm>
            <FormName>
              <span id="Span_form_name">
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="First Name"
                  maxLength={10}
                  required
                />
                <i>
                  <FaUser />
                </i>
              </span>

              <IconSelected />
            </FormName>

            <IconOptionUser
              icons={[
                'public/icon_user/icon_apple.png',
                'public/icon_user/icon_basketball.png',
                'public/icon_user/icon_book.png',
                'public/icon_user/icon_cake.png',
                'public/icon_user/icon_carrot.png',
                'public/icon_user/icon_cherry.png',
                'public/icon_user/icon_clock.png',
                'public/icon_user/icon_cutlery.png',
                'public/icon_user/icon_coffee.png',
                'public/icon_user/icon_drugs.png',
                'public/icon_user/icon_egg.png',
                'public/icon_user/icon_globe.png',
                'public/icon_user/icon_hamburguer.png',
                'public/icon_user/icon_hat.png',
                'public/icon_user/icon_maple.png',
                'public/icon_user/icon_murshow.png',
                'public/icon_user/icon_paper.png',
                'public/icon_user/icon_pen.png',
                'public/icon_user/icon_pizza.png',
                'public/icon_user/icon_poison.png',
                'public/icon_user/icon_pumpkin.png',
                'public/icon_user/icon_seed.png',
                'public/icon_user/icon_ticken.png',
                'public/icon_user/icon_watermelon.png',
              ]}
            />
          </ModalForm>
        </ModalMain>

        <SubmitButtonModal name={name} />
      </ModalContent>
    </ModalDiv>
  );
};
