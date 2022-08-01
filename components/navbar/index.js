import Logo from "@Components/logo";
import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { DeviceSize } from "utils/deviceSize";
import Accessibility from "./accessibility";
import MobileNavLinks from "./mobileNavLinks";
import NavLinks from "./navLinks";

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  /* display: none; */

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavBar = () => {
  //   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (
    <>
      <NavBarContainer>
        <LeftSection>
          <Logo />
        </LeftSection>
        <MiddleSection>
          <NavLinks />
        </MiddleSection>
        <RightSection>
          <Accessibility />
          <MobileNavLinks />
        </RightSection>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
