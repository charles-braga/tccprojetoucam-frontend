import React from 'react';

export default function Header() {
  return (
    <>
      <nav class="teal accent-3">
        <div class="nav-wrapper black-text">
          <a href="index.html" class="brand-logo black-text">Portal Amigo do Pet</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger black-text"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down black-text">
            <li><a class='black-text' href="../../../public/adoption.html"  >Adoções</a></li>
            <li class='black-text'>Logado como: Charles </li>
          </ul>
        </div>

      </nav>
      <ul class="sidenav" id="mobile-demo">
        <li><a class='black-text' href="../../../public/adoption.html" >Adoções</a></li>
      </ul>
    </>
  );
}
