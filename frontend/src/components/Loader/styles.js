import styled, { keyframes } from 'styled-components';

const load = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(246, 245, 252, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    animation: ${load} 1s linear infinite;
    transform: translateZ(0);
    color: ${({ theme }) => theme.colors.primary.main};
    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 4px solid black;
    background: transparent;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;
