import { Link as LinkR } from "react-router-dom";

import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px; 
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.div`
  background-color: black;
  backdrop-filter: blur(12px); /* Premium glassmorphism effect */
  -webkit-backdrop-filter: blur(12px);
  height: 70px; /* Reduced height for a sleeker profile */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => `${theme.text_primary}10`};
  transition: all 0.3s ease-in-out;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  back
`;

export const NavLogo = styled(LinkR)`
  display: flex;

  align-items: center;

  gap: 8px;

  color: ${({ theme }) => theme.text_primary};

  text-decoration: none;

  cursor: pointer;
`;

export const Span = styled.span`
  font-weight: 600;

  font-size: 18px;

  color: ${({ theme }) => theme.text_primary};
`;

export const NavItems = styled.ul`
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 32px;

  padding: 0;

  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary || theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  padding: 4px 0;
  transition: color 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  /* Modern sliding underline interaction */

  &::after {
    content: "";

    position: absolute;

    bottom: 0;

    left: 0;

    width: 0;

    height: 2px;

    background-color: ${({ theme }) => theme.primary};

    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const GitHubButton = styled.a`
  border: 1.5px solid ${({ theme }) => theme.primary};

  justify-content: center;

  display: flex;

  align-items: center;

  border-radius: 50px; /* Fully rounded capsule button */

  color: ${({ theme }) => theme.primary};

  cursor: pointer;

  padding: 8px 20px;

  font-weight: 500;

  text-decoration: none;

  font-size: 14px;

  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};

    color: ${({ theme }) => theme.white || "#ffffff"};

    box-shadow: 0 4px 15px ${({ theme }) => `${theme.primary}40`}; /* Premium glow effect */

    transform: translateY(-1px);
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;

    font-size: 1.5rem;

    cursor: pointer;

    color: ${({ theme }) => theme.text_primary};

    transition: transform 0.2s ease;

    &:active {
      transform: scale(0.9);
    }
  }
`;

export const MobileMenu = styled.div`
  display: flex;

  flex-direction: column;

  gap: 20px;

  position: absolute;

  top: 70px;

  right: 0;

  width: 100%;

  padding: 24px 40px;

  background: ${({ theme }) =>
    `${theme.card_light}f2`}; /* Solid background for mobile overlay readability */

  backdrop-filter: blur(10px);

  border-bottom: 1px solid ${({ theme }) => `${theme.text_primary}10`};

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  z-index: 1000;
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};

  font-weight: 500;

  cursor: pointer;

  text-decoration: none;

  font-size: 1.1rem;

  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};

    padding-left: 4px; /* Tiny modern micro-interaction on hover */
  }
`;
