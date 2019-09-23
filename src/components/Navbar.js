import React, { Component } from "react";
import { List, Button, Header } from "semantic-ui-react";

import { Route, NavLink } from "react-router-dom";

const Navbar = ({ user, signUp, logIn, logOut }) => {
  return (
    <nav>
      <Header centered horizontal>
        <NavLink to="/" exact>
          <h1>Home</h1>
        </NavLink>
      </Header>

      {user && !user.error ? (
        <div>
          <Header
            floated="left"
            horizontal
            as="h4"
          >{` Logged in as ${user.email}`}</Header>
          <Button onClick={logOut} floated="right">
            <Button.Content>Log out</Button.Content>
          </Button>
        </div>
      ) : (
        <>
          <Button floated="left" horizontal>
            <Button.Content>
              <NavLink to="/signup" exact>
                Sign up
              </NavLink>
            </Button.Content>
          </Button>

          <Button floated="left" horizontal>
            <Button.Content>
              <NavLink to="/login" exact>
                Login
              </NavLink>
            </Button.Content>
          </Button>
        </>
      )}

      <br />
    </nav>
  );
};

export default Navbar;
