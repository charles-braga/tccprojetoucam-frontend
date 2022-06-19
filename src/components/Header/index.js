import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrapperLogoName = styled.a`
  font-family: 
`;

export default function Header() {
  return (
    <div className='navbar-fixed'>
      <nav className="teal accent-3 ">
        <div className="nav-wrapper black-text">
          <Link to="/" className="brand-logo black-text">Portal Amigo do Pet</Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger black-text"><i class="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down black-text">
            <li><Link className='black-text' to="/adoption">Adoções</Link></li>
            <li><Link className='black-text' to="/management">Gerenciamento</Link></li>
          </ul>
        </div>

      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li><Link className='black-text' to="/adoption">Adoções</Link></li>
        <li><Link className='black-text' to="/management">Gerenciamento</Link></li>
      </ul>
    </div>
  );
}
