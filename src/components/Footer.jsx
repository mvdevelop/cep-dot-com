
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import logo from "../../public/icon.ico";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
      <Container>
        <Row className="gy-4">
          {/* Coluna 1: Logo e descrição */}
          <Col md={4} sm={12}>
            <div className="d-flex align-items-center mb-3">
              <img
                src={logo}
                alt="Elo.com Logo"
                width="45"
                height="45"
                className="me-2"
              />
              <h4 className="mb-0">CEP</h4>
            </div>
            <p className="text-secondary small">
              O CEP (Copa do Ensino Público) é uma plataforma criada para organizar e centralizar conteúdos de reforço escolar para estudantes de escolas públicas. Aqui, você encontra materiais como resumos, videoaulas, exercícios, links úteis e anotações. 
              O site funciona como uma biblioteca de estudos acessível e prática, oferecendo uma interface rápida e intuitiva para pesquisar, visualizar e gerenciar conteúdos. O objetivo é ajudar cada aluno a aprender de forma mais eficiente, estruturada e preparada para superar desafios acadêmicos.
            </p>
          </Col>

          {/* Coluna 2: Navegação */}
          <Col md={2} sm={6}>
            <h6 className="text-uppercase fw-bold mb-3">Navegação</h6>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light p-0 mb-2">Home</Nav.Link>
              <Nav.Link href="#" className="text-light p-0 mb-2">Content</Nav.Link>
              <Nav.Link href="#" className="text-light p-0 mb-2">Contact</Nav.Link>
              <Nav.Link href="#" className="text-light p-0">Extra</Nav.Link>
            </Nav>
          </Col>

          {/* Coluna 3: Recursos */}
          <Col md={3} sm={6}>
            <h6 className="text-uppercase fw-bold mb-3">Recursos</h6>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light p-0 mb-2">Sobre a HQ</Nav.Link>
              <Nav.Link href="#" className="text-light p-0 mb-2">Personagens</Nav.Link>
              <Nav.Link href="#" className="text-light p-0 mb-2">Capítulos</Nav.Link>
              <Nav.Link href="#" className="text-light p-0">Galeria</Nav.Link>
            </Nav>
          </Col>

          {/* Coluna 4: Contato */}
          <Col md={3} sm={12}>
            <h6 className="text-uppercase fw-bold mb-3">Contato</h6>
            <p className="text-secondary small mb-1">📧 contato@elo.com</p>
            <p className="text-secondary small mb-1">📍 São Paulo, Brasil</p>
            <p className="text-secondary small">📞 +55 (11) 99999-9999</p>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        {/* Direitos autorais */}
        <Row>
          <Col className="text-center text-secondary small">
            © {new Date().getFullYear()} <strong>Elo.com</strong> — Todos os direitos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
