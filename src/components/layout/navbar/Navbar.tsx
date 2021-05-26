import { withRouter } from "react-router";
import SearchBox from "../../utils/search-box/SearchBox";
import logo from "./assets/NavLogo.png";
import Hamburger from "./assets/Hamburger.svg";
import { leftGroupLinks, rightGroupIcons, SearchBoxStyles } from "./helper";
import {
  LeftGroup,
  Nav,
  NavLink,
  RightGroup,
  RightGroupIcon,
  Logo,
  HamburgerIcon,
} from "./Styles";

const Navbar = () => {
  const handleIconClick = (path: string) => {
    console.log(path);
  };

  return (
    <Nav>
      <LeftGroup>
        <HamburgerIcon src={Hamburger} />
        <Logo src={logo} onClick={() => handleIconClick("/")} alt="" />
        {leftGroupLinks.map(({ title, styles, path }, i) => (
          <NavLink key={i} styles={styles} to={path}>
            {title}
          </NavLink>
        ))}
      </LeftGroup>
      <RightGroup>
        <SearchBox styles={SearchBoxStyles} isNavBar={true} />
        {rightGroupIcons.map(({ src, path, styles }, i) => (
          <RightGroupIcon
            isMainLogo={false}
            alt=""
            src={src}
            onClick={() => handleIconClick(path)}
            key={i}
            styles={styles}
          />
        ))}
      </RightGroup>
    </Nav>
  );
};

export default withRouter(Navbar);
