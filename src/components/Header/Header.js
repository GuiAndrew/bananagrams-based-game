import React from "react";
import LinkWrapper from '../../Util/LinkWrapper';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper teal lighten-2">
        <LinkWrapper to="/" className="brand-logo">
          Bananagrama: Anime/Manga Version
        </LinkWrapper>
        <ul id="" className="right">
          <li>
            <LinkWrapper to="/Play">Play</LinkWrapper>
          </li>
          <li>
            <LinkWrapper to="/Instructions">Instructions</LinkWrapper>
          </li>
          <li>
            <LinkWrapper to="/About">About</LinkWrapper>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;