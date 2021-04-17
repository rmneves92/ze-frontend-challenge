import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  left: 0;
  background-color: #333;
  height: 100px;
  margin: 0 auto;
`;

export const LinkContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: underline;
  padding-top: 12px;
`;
