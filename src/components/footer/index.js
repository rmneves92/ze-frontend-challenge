import React from 'react';
import { FooterWrapper, LinkContainer, Link } from './style';

const Footer = (props) => {
  return (
    <FooterWrapper>
      <LinkContainer>
        <Link href="https://ze.delivery/" target="_blank">
          Zé Delivery
        </Link>
        <Link href="https://bit.ly/32Gb2Qi" target="_blank">
          Query Distributor
        </Link>
        <Link href="https://bit.ly/2N3JQ7k" target="_blank">
          Query Products
        </Link>
        <Link href="https://bit.ly/2pMG8Xy" target="_blank">
          Query Categories
        </Link>
      </LinkContainer>
    </FooterWrapper>
  );
};

export default Footer;
