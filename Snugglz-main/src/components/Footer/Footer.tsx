import { FooterAside } from "./FooterAside";
import { FooterAboutUs } from "./FooterAboutUs";
import { FooterLinks } from "./FooterLinks";
import { FooterStayConnected } from "./FooterStayConnected";
import { footerLinks, IFooterLinks } from "./data/data";
import { Container } from "../../ui_kits/global/Container.styles";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="Footer ">
      <Container>
        <div className="Footer__Inner u-h5">
          <FooterAboutUs />
          {footerLinks.map((item: IFooterLinks) => (
            <FooterLinks links={item} key={item.title} />
          ))}
          <FooterStayConnected />
        </div>
        <FooterAside />
      </Container>
    </footer>
  );
};
