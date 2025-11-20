
import React from "react";
import { Navbar, Nav, Container, Form, Button, FormControl } from "react-bootstrap";
import { FaSearch, FaUser, FaUserPlus } from "react-icons/fa";

import logo from "../../public/icon.ico";
import "./components.css";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        {/* Logo e título */}
        <Navbar.Brand href="/" className="d-flex align-items-center text-white">
          <img
            src={logo}
            alt="Elo.com Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <h4 className="mb-0 fw-bold">ELO</h4>
        </Navbar.Brand>

        {/* Toggle para mobile */}
        <Navbar.Toggle aria-controls="navbar-content" />

        {/* Links e botões */}
        <Navbar.Collapse id="navbar-content" className="justify-content-between">
          <Nav className="me-auto nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#temporadas">Temporadas</Nav.Link>
            <Nav.Link href="#extra">Extra</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>

          {/* Campo de busca com ícone */}
          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" className="d-flex align-items-center justify-content-center">
              <FaSearch />
            </Button>
          </Form>

          {/* Botões de autenticação com ícones */}
          <div className="d-flex gap-2">
            <Button variant="outline-light" className="d-flex align-items-center gap-2">
              <FaUser />
              Login
            </Button>
            <Button variant="light" className="d-flex align-items-center gap-2">
              <FaUserPlus />
              Signup
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
