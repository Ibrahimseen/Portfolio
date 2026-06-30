import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Span,
  NavItems,
  NavLink,
  ButtonContainer,
  GitHubButton,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa"; // FaTimes used for modern close icon
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
    <NavbarContainer>
  <NavLogo to="/">
    <DiCssdeck size="2.5rem" color={theme.primary} />
    <Span>Portfolio</Span>
  </NavLogo>

  <MobileIcon onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <FaTimes /> : <FaBars />}
  </MobileIcon>

  <NavItems>
    <NavLink href="#about">About</NavLink>
    <NavLink href="#skills">Skills</NavLink>
    <NavLink href="#experience">Experience</NavLink>
    <NavLink href="#projects">Projects</NavLink>
    <NavLink href="#education">Education</NavLink>
  </NavItems>

  <ButtonContainer>
    <GitHubButton href={Bio.github} target="_blank">
      Github Profile
    </GitHubButton>
    <GitHubButton href="tel:03283482440">
      📞 0328-3482440
    </GitHubButton>
  </ButtonContainer>

  {isOpen && (
    <MobileMenu isOpen={isOpen}>
      <MobileLink href="#about" onClick={() => setIsOpen(false)}>
        About
      </MobileLink>
      <MobileLink href="#skills" onClick={() => setIsOpen(false)}>
        Skills
      </MobileLink>
      <MobileLink href="#experience" onClick={() => setIsOpen(false)}>
        Experience
      </MobileLink>
      <MobileLink href="#projects" onClick={() => setIsOpen(false)}>
        Projects
      </MobileLink>
      <MobileLink href="#education" onClick={() => setIsOpen(false)}>
        Education
      </MobileLink>

      <GitHubButton
        style={{ padding: "10px 16px", width: "100%", textAlign: "center" }}
        href={Bio.github}
        target="_blank"
      >
        Github Profile
      </GitHubButton>
      <GitHubButton 
        style={{ padding: "10px 16px", width: "100%", textAlign: "center", marginTop: "8px" }}
        href="tel:03283482440"
      >
        📞 0328-3482440
      </GitHubButton>
    </MobileMenu>
  )}
</NavbarContainer>
    </Nav>
  );
};

export default Navbar;
