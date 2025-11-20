
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Extra() {
  return (
    <div className="extra-page bg-dark text-light py-5" id='extra'>
      <Container>
        {/* Título principal */}
        <header className="text-center mb-5">
          <h1 className="display-5 fw-bold">Curiosidades do Mundo dos Quadrinhos</h1>
          <p className="text-secondary">
            Descubra fatos e curiosidades sobre a evolução das HQs ao longo da história.
          </p>
        </header>

        {/* Seção 1 */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img
              src="https://via.placeholder.com/600x400?text=História+dos+Quadrinhos"
              alt="História dos Quadrinhos"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold mb-3">As Origens das HQs</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales nisl sed
              ligula vestibulum, id varius sem fringilla. Morbi vel arcu eget lectus volutpat
              vulputate. Sed eu mi eget justo sagittis tempor.
            </p>
            <p>
              Donec commodo, massa at cursus aliquet, neque est vestibulum elit, at rhoncus purus
              enim non neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae.
            </p>
          </Col>
        </Row>

        {/* Seção 2 */}
        <Row className="align-items-center flex-md-row-reverse mb-5">
          <Col md={6}>
            <img
              src="https://via.placeholder.com/600x400?text=Super-Heróis+Clássicos"
              alt="Super-Heróis Clássicos"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold mb-3">A Era de Ouro dos Super-Heróis</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt magna sit
              amet metus dictum, sit amet varius eros porttitor. Suspendisse interdum ligula sit
              amet mi malesuada, sit amet maximus justo fermentum.
            </p>
            <p>
              Nam convallis justo nec elit interdum, ut viverra nunc faucibus. In tristique congue
              metus, a tincidunt ipsum volutpat at.
            </p>
          </Col>
        </Row>

        {/* Cards de curiosidades */}
        <section className="my-5">
          <h2 className="text-center fw-bold mb-4">Curiosidades Rápidas</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card bg="secondary" text="light" className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Primeira HQ Publicada</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies enim
                    sed urna efficitur gravida.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card bg="secondary" text="light" className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Criação do Superman</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card bg="secondary" text="light" className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>HQs no Cinema</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                    condimentum tortor vel ultrices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}
