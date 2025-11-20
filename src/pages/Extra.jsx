
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Extra() {
  return (
    <div className="extra-page bg-dark text-light py-5" id="extra">
      <Container>

        {/* Título principal */}
        <header className="text-center mb-5">
          <h1 className="display-5 fw-bold">Curiosidades do Mundo da Tecnologia</h1>
          <p className="text-secondary">
            Descubra fatos interessantes e momentos marcantes que moldaram o desenvolvimento de softwares e a evolução da web.
          </p>
        </header>

        {/* Seção 1 */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img
              src="https://via.placeholder.com/600x400?text=Evolução+da+Web"
              alt="Evolução da Web"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold mb-3">A Evolução da Web</h3>
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
              src="https://via.placeholder.com/600x400?text=Linguagens+de+Programação"
              alt="Linguagens de Programação"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold mb-3">O Surgimento das Linguagens Modernas</h3>
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
                  <Card.Title>Primeiro Site da História</Card.Title>
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
                  <Card.Title>A Criação do JavaScript</Card.Title>
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
                  <Card.Title>Frameworks da Nova Geração</Card.Title>
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
