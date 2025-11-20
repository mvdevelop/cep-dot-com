
import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Button, FormControl } from "react-bootstrap";
import { FaSearch, FaUser, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import logo from "../../public/icon.ico";
import "./components.css";

function AppNavbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim() === "") return;

    navigate(`/search?q=${encodeURIComponent(search)}`);
    setSearch("");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center text-white">
          <img src={logo} width="40" height="40" className="me-2" />
          <h4 className="mb-0 fw-bold">DEV LIB</h4>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" />

        <Navbar.Collapse id="navbar-content" className="justify-content-between">

          <Nav className="me-auto nav-links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#conteudo">Conteúdo</Nav.Link>
            <Nav.Link href="#extra">Extra</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>

          {/* FORM DE BUSCA */}
          <Form className="d-flex me-3" onSubmit={handleSubmit}>
            <FormControl
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Buscar..."
              className="me-2"
            />
            <Button variant="outline-light" type="submit">
              <FaSearch />
            </Button>
          </Form>

          <div className="d-flex gap-2">
            <Button variant="outline-light" className="d-flex align-items-center gap-2">
              <FaUser /> Login
            </Button>
            <Button variant="light" className="d-flex align-items-center gap-2">
              <FaUserPlus /> Signup
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
