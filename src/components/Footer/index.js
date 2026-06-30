import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Bio } from "../../data/constants";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 60px 20px 30px;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const TagLine = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 25px;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;

  @media (max-width:768px){
    gap:16px;
  }
`;

const NavLink = styled.a`
  color:${({theme})=>theme.text_primary};
  text-decoration:none;
  font-weight:500;
  transition:.3s;

  &:hover{
    color:${({theme})=>theme.primary};
  }
`;

const SocialMediaIcons = styled.div`
  display:flex;
  gap:20px;
  margin-bottom:25px;
`;

const SocialMediaIcon = styled.a`
  color:${({theme})=>theme.text_primary};
  transition:.3s;

  &:hover{
    color:${({theme})=>theme.primary};
    transform:translateY(-4px);
  }
`;

const Contact = styled.p`
  color:${({theme})=>theme.text_secondary};
  display:flex;
  align-items:center;
  gap:8px;
  margin-bottom:18px;
`;

const Copyright = styled.p`
  color:${({theme})=>theme.soft2};
  font-size:14px;
  text-align:center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>

        <Logo>Ibrahim Rehman</Logo>

        <TagLine>
          MERN Stack Developer • React.js • Next.js • Node.js
        </TagLine>

        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Journey</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>

        <SocialMediaIcons>

          <SocialMediaIcon
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </SocialMediaIcon>

          <SocialMediaIcon
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </SocialMediaIcon>

          <SocialMediaIcon
            href={Bio.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </SocialMediaIcon>

          <SocialMediaIcon
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </SocialMediaIcon>

        </SocialMediaIcons>

        <Contact>
          <EmailIcon fontSize="small" />
          {Bio.email}
        </Contact>

        <Copyright>
          © {new Date().getFullYear()} Ibrahim Rehman. All Rights Reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;