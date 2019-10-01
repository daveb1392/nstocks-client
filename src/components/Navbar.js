import React, { Component } from "react";
import TdashLogo from "./TdashLogo.svg";
import { List, Button, Header, Menu, Container, Image } from "semantic-ui-react";
import { Route, NavLink } from "react-router-dom";

const Navbar = ({ user, signUp, logIn, logOut }) => {
  return (
    <Menu inverted>
      
        <Menu.Item fluid>
          <Image
            className="logo"
            src={TdashLogo}
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
    </Menu>
  );
};

export default Navbar;



