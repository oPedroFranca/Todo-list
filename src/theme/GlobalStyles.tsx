import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  `;

export const colors = {
  dark_black: '#181a25',
  white_black: '#26293f',
  purple: '#907ad6',
  dark_purple: '#775cd1',
  white: '#FFFFFF',
  gray: '#ffffff68',
  red: '#fc6b6b',
  dark_red: '#972626',
  green: '#b1f8dc',
  dark_green: '#01aa66',
  dark_orange: '#d36728',
  orange: '#f8b48d',
};
