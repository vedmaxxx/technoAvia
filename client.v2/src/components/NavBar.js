import React, { useContext } from "react";
import { Context } from "../index";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { MAIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { Container, Image } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
      
      //  fixed="top"
        <Navbar bg="dark" variant="dark">
          <Container>
            {/* ЛЕВАЯ ЧАСТЬ НАВБАРА */}
            <NavLink style={{color:'white', fontSize:'30px', textDecoration:'none', fontFamily:'Calibri'}} to={MAIN_ROUTE}>
                TechnoAvia
                {/* здесь будет картинка */}
            </NavLink>
            <Nav className="ms-5">
              <NavLink className="me-2" style={{color: "white"}} to={MAIN_ROUTE}>
                <Button variant={"outline-light"}>Маршруты</Button>
              </NavLink>
              {/* <NavLink className="me-2" style={{color: "white"}} to={MAIN_ROUTE}>
                <Button variant={"outline-light"}>Вертолеты</Button>
              </NavLink> */}
            </Nav>


            {/* ПРАВАЯ ЧАСТЬ НАВБАРА */}
            {user.isAuth ?
              <Nav className="ms-auto" style={{color: "white"}}>
                <Button style={{marginRight:5}} variant={"outline-light"}>Админ-панель</Button>
                <Button variant={"outline-light"} onClick={() => user.setIsAuth(false)} className="ml-2">Выйти</Button>
              </Nav>
              :
              <Nav className="ms-auto" style={{color: "white"}}>
                <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
              </Nav>
            }
          </Container>
      </Navbar>
    );
});
export default NavBar;