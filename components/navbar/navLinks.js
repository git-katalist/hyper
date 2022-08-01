import styled from "styled-components";
import Link from "next/link";

const NavLinksContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style-type: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  :hover {
    border-top: 2px solid #2ecc71;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavLinks = () => {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="/">
            <MenuLink>Home</MenuLink>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="/about">
            <MenuLink>About</MenuLink>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="/">
            <MenuLink>Products</MenuLink>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="/">
            <MenuLink>Contact</MenuLink>
          </Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
};

export default NavLinks;
