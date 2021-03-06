import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 55px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const Buttoni = styled.button`
  border-radius: 55px;
  background: ${({ primary }) => (primary ? 'red' : 'red')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? 'orange' : 'orange')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Buttonn = styled.button`
  border-radius: 55px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '8px 44px' : '8px 17px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;


export const Buttoner = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? 'darkgreen' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '32px 64px' : '8px 47px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '38px' : '20px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : 'green')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;


export const Buttons = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? 'darkgreen' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '22px 24px' : '6px 17px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '38px' : '20px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : 'green')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
