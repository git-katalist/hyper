import { useState } from "react";
import styled from "styled-components";
import Accessibility from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 767px) {
    display: none;
  }
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  list-style-type: none;
  background-color: #f9f9f9;
  position: fixed;
  top: 60px;
  left: 0;
`;

const LinkItem = styled.li`
  /* height: 100%; */
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  /* align-items: center;
  justify-content: center; */
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  :hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  height: 100%;
  display: flex;
  align-items: center;
`;

const MobileNavLinks = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="/">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/about">About</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/">Products</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/">Contact</Link>
          </LinkItem>
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
};

export default MobileNavLinks;
