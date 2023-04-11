import React from 'react';
import { Span_form_name } from './style';

interface IconSelectedProps {
  selectedIcon: string;
}

export const IconSelected = ({ selectedIcon }: IconSelectedProps) => {
  return (
    // Retorna uma tag span contendo a tag img com o ícone selecionado
    <Span_form_name>
      <img src={selectedIcon} alt="" />
    </Span_form_name>
  );
};
