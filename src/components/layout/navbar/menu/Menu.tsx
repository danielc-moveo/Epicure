import { Wrapper } from "./Styles";
import { MenuProps } from "./interface";
import { BorderCenter, Icon, Link } from "../../utils/CommonStyles";
import closeMenu from "../assets/close-menu.svg";
import { menuLinksTop, menuLinksBottom } from "../helper";

const Menu = ({ handleMenuClicked }: MenuProps) => {
  return (
    <Wrapper>
      <Icon src={closeMenu} alt="" onClick={handleMenuClicked} />
      {menuLinksTop.map(({ path, title, className }, key) => (
        <Link className={className} to={path} key={key}>
          {title}
        </Link>
      ))}
      <BorderCenter />
      {menuLinksBottom.map(({ path, title, className }, key) => (
        <Link className={className} to={path} key={key}>
          {title}
        </Link>
      ))}
    </Wrapper>
  );
};

export default Menu;
