import { Wrapper, FooterLink } from "./Styles";

const footerItems = [
  { title: "Contact Us", path: "/contact" },
  { title: "Terms Of Use", path: "/terms" },
  { title: "Privacy Policy", path: "/privacy" },
];

const Footer = () => {
  return (
    <Wrapper>
      {footerItems.map(({ title, path }, i) => (
        <FooterLink key={i} to={path}>
          {title}
        </FooterLink>
      ))}
    </Wrapper>
  );
};

export default Footer;
