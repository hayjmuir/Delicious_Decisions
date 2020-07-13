import React from "react";
import useAuthentication from "../Hooks/useAuthentication";
import styled from "styled-components";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  
  width: 100%;
  height: 100px;
  z-index: 999;
  display: flex;
  justify-content: space-between;  
`;

const Logo = styled(Title)`
  font-size: 40px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

const UserStatus = styled.div`
  color: white; 
  font-size: 16px; 
  margin-right: 30px; 
`

const LoginButton = styled.span`
  cursor: pointer; 
`

export function Navbar() {
  const { login, logout, loggedIn } = useAuthentication();
  return (
    <NavbarStyled>
      <Logo>
        Delicious Decisions
      </Logo>
      <UserStatus>
        {loggedIn !== "loading" ? (
          <>
             {loggedIn ? "Logged in." : ""}
            {loggedIn ? (
              <LoginButton onClick={logout}> Log out </LoginButton>
            ) : (
              <LoginButton onClick={login}> Log in / Sign up </LoginButton>
            )}
          </>
        ) : (
          "loading..."
        )}
      </UserStatus>
    </NavbarStyled>
  );
}
