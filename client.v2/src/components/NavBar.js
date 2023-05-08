import React, { useContext } from "react";
import { Context } from "../index";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { MAIN_ROUTE } from "../utils/consts";
import { Container } from "react-bootstrap";

const NavBar = () => {
    const {user} = useContext(Context)
    return (
      
      //  fixed="top"
        <Navbar bg="dark" variant="dark">
          <Container>
            <NavLink style={{color:'white'}} to={MAIN_ROUTE}>ТехноАвиа</NavLink>
            {user.isAuth ?
              <Nav className="ms-auto" style={{color: "white"}}>
                <Button variant={"outline-light"}>Админ-панель</Button>
                <Button variant={"outline-light"}  className="ml-2">Выйти</Button>
              </Nav>
              :
              <Nav className="ms-auto" style={{color: "white"}}>
                <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
              </Nav>
            }
          </Container>
      </Navbar>
    );
};
export default NavBar;