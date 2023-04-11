import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

import { IconOptionUser } from './IconOptionUser';
import { SubmitButtonModal } from './SubmitButton';
import { IconSelected } from './iconSelected';
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

// Lista com os caminhos para os ícones de usuário
const iconFilePaths = [
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
];

export const ModalFormUser = () => {
  const [firstName, setFirstName] = useState('');
  // Define o estado para o ícone selecionado, inicializado com o primeiro da lista
  const [selectedIcon, setSelectedIcon] = useState(iconFilePaths[0]);

  // Função para atualizar o estado do campo de nome
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  // Função para atualizar o estado do ícone selecionado
  const handleIconClick = (icon: string) => {
    setSelectedIcon(icon);
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
                {/* Campo de nome com ícone de usuário */}
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

              {/* Exibição do ícone selecionado */}
              <IconSelected selectedIcon={selectedIcon} />
            </FormName>

            <IconOptionUser
              icons={iconFilePaths}
              onIconClick={handleIconClick}
            />
          </ModalForm>
        </ModalMain>

        <SubmitButtonModal name={firstName} />
      </ModalContent>
    </ModalDiv>
  );
};
