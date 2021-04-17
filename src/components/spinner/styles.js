import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

export const SpinnerElement = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid #fc9921;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  animation: ${spin} 0.6s linear infinite;
`;
