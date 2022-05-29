import React from 'react';
import styled from 'styled-components';


const Title = styled.h3`
  color: teal;
  margin: 0;
`;

export default function Header() {
  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Portal Amigo do Pet</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><a href="#">Sass</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#">Javascript</a></li>
            <li><a href="#">Mobile</a></li>
          </ul>
        </div>
      </nav>
      <ul class="sidenav" id="mobile-demo">
        <li><a href="#">Sass</a></li>
        <li><a href="#">Components</a></li>
        <li><a href="#">Javascript</a></li>
        <li><a href="#">Mobile</a></li>
      </ul>
    </>
  );
}
