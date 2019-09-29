import React, { Component } from "react";
import { List, Button, Header, Menu, Container, Image } from "semantic-ui-react";
import { Route, NavLink } from "react-router-dom";

const Navbar = ({ user, signUp, logIn, logOut }) => {
  return (
    <Menu>
      <Container>
        <Menu.Item as="a" header>
          <Image
            size="small"
            src="/Users/david/Development/nstocks/nstocks-client/public/Tdash_logo.png"
          />
        </Menu.Item>
        {user && !user.error ? (
          <Menu.Menu position="right">
            <Menu.Item onClick={logOut} as="a" name="logout">
              Log out
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <Menu.Item as="a" name="login">
              <NavLink to="/login" exact>
                Login
              </NavLink>
            </Menu.Item>
            <Menu.Item as="a" name="register">
              <NavLink to="/signup" exact>
                Sign up
              </NavLink>
            </Menu.Item>
          </Menu.Menu>
        )}
      </Container>
    </Menu>
  );
};

export default Navbar;



