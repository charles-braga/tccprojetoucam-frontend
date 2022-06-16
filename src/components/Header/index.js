import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrapperLogoName = styled.a`
  font-family: 
`;

export default function Header() {
  return (
    <>
      <nav class="teal accent-3">
        <div class="nav-wrapper black-text">
          <Link to="/" class="brand-logo black-text">Portal Amigo do Pet</Link>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger black-text"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down black-text">
            <li><Link class='black-text' to="/adoption">Adoções</Link></li>
            <li><Link class='black-text' to="/management">Gerenciamento</Link></li>
          </ul>
        </div>

      </nav>
      <ul class="sidenav" id="mobile-demo">
        <li><Link class='black-text' to="/adoption">Adoções</Link></li>
        <li><Link class='black-text' to="/management">Gerenciamento</Link></li>
      </ul>
    </>
  );
}
