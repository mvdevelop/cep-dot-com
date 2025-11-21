
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Extra() {
  return (
    <div className="extra-page bg-dark text-light py-5" id="extra">
      <Container>

        {/* Título principal */}
        <header className="text-center mb-5">
          <h1 className="display-5 fw-bold">Curiosidades do Mundo Escolar</h1>
          <p className="text-secondary">
            Fatos históricos, descobertas científicas e momentos marcantes que transformaram a educação e o conhecimento humano.
          </p>
        </header>

        {/* Seção 1 */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img
              src="https://via.placeholder.com/600x400?text=Hist%C3%B3ria+da+Educa%C3%A7%C3%A3o"
              alt="História da Educação"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold mb-3">A Evolução da Educação</h3>
            <p>
              Desde as primeiras formas de escrita até as escolas modernas, a educação passou por transformações que moldaram a forma como aprendemos hoje.
              Instituições, métodos e ideias foram surgindo ao longo dos séculos, tornando o conhecimento cada vez mais acessível.
            </p>
            <p>
              Mesmo com todos os avanços, o objetivo permanece o mesmo: preparar pessoas para compreender o mundo, desenvolver habilidades e abrir portas para novas oportunidades.
            </p>
          </Col>
        </Row>

        {/* Seção 2 */}
        <Row className="align-items-center flex-md-row-reverse mb-5">
          <Col md={6}>
            <img
              src="https://via.placeholder.com/600x400?text=Grandes+Descobertas"
              alt="Grandes Descobertas"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold mb-3">Grandes Descobertas que Mudaram o Mundo</h3>
            <p>
              A história da ciência é marcada por descobertas que revolucionaram completamente o conhecimento humano. 
              Da matemática à biologia, cada avanço abriu caminho para novas áreas de estudo.
            </p>
            <p>
              Muitas dessas descobertas são estudadas até hoje nas escolas, ajudando estudantes a entender conceitos fundamentais e enxergar como a ciência evolui com o tempo.
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
                  <Card.Title>A Origem da Escrita</Card.Title>
                  <Card.Text>
                    A primeira forma de escrita conhecida surgiu há mais de 5 mil anos, na Mesopotâmia, permitindo registrar histórias, contas e conhecimentos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card bg="secondary" text="light" className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>A Invenção do Zero</Card.Title>
                  <Card.Text>
                    O número zero, essencial na matemática moderna, foi criado por civilizações antigas como parte fundamental para cálculos complexos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card bg="secondary" text="light" className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>O Primeiro Livro Impresso</Card.Title>
                  <Card.Text>
                    A prensa de Gutenberg revolucionou o acesso ao conhecimento ao permitir que livros fossem produzidos em grande escala.
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
