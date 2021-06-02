import { useState } from "react";
import { withRouter } from "react-router";
import SearchBox from "../utils/search-box/SearchBox";
import Hamburger from "./assets/Hamburger.svg";
import { leftGroupLinks, rightGroupIcons } from "./helper";
import {
  LeftGroup,
  Nav,
  NavLink,
  RightGroup,
  RightGroupIcon,
  HamburgerIcon,
} from "./Styles";
import { iconHash } from "../utils/assets/iconsHash";
import { Icon } from "../utils/CommonStyles";
import Menu from "./menu/Menu";

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleRedirect = (path: string) => {};

  const handleMenuClicked = () => {
    setIsMenuClicked((prev) => !prev);
  };

  return (
    <Nav>
      {isMenuClicked && <Menu handleMenuClicked={handleMenuClicked} />}
      <LeftGroup>
        <HamburgerIcon onClick={handleMenuClicked} src={Hamburger} />
        <Icon
          className="logo"
          src={iconHash["logo"]}
          onClick={() => handleRedirect("/")}
          alt=""
        />
        {leftGroupLinks.map(({ title, styles, path }, i) => (
          <NavLink key={i} styles={styles} to={path}>
            {title}
          </NavLink>
        ))}
      </LeftGroup>
      <RightGroup>
        <SearchBox isNavbar={true} />
        {rightGroupIcons.map(({ src, path, styles }, i) => (
          <RightGroupIcon
            isMainLogo={false}
            alt=""
            src={src}
            onClick={() => handleRedirect(path)}
            key={i}
            styles={styles}
          />
        ))}
      </RightGroup>
    </Nav>
  );
};

export default withRouter(Navbar);
