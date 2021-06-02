import { Wrapper, FooterLink } from "./Styles";

const footerItems = [
  { index: 1, title: "Contact Us", path: "/contact" },
  { index: 2, title: "Terms Of Use", path: "/terms" },
  { index: 3, title: "Privacy Policy", path: "/privacy" },
];

const Footer = () => {
  return (
    <Wrapper>
      {footerItems.map(({ title, path, index }) => (
        <FooterLink index={index} key={index} to={path}>
          {title}
        </FooterLink>
      ))}
    </Wrapper>
  );
};

export default Footer;
