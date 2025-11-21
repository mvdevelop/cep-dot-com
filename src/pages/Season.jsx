
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import contentData from "../data/Content.json";

function Season() {
  const { id } = useParams();
  const navigate = useNavigate();
  const season = contentData.find((s) => s.id === parseInt(id));

  const [pageIndex, setPageIndex] = useState(0);

  if (!season) {
    return <p className="text-center mt-5">Página não encontrada.</p>;
  }

  const currentPage = season.pages[pageIndex];

  const handleNext = () => {
    if (pageIndex < season.pages.length - 1) setPageIndex(pageIndex + 1);
  };

  const handlePrev = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold">{season.name}</h2>
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src={new URL(`${currentPage.img}`, import.meta.url).href}
            alt={`Página ${pageIndex + 1}`}
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6}>
          <p className="lead">{currentPage.text}</p>
        </Col>
      </Row>

      <div className="d-flex justify-content-between mt-4">
        <Button variant="secondary" onClick={handlePrev} disabled={pageIndex === 0}>
          ← Página anterior
        </Button>
        <Button
          variant="dark"
          onClick={handleNext}
          disabled={pageIndex === season.pages.length - 1}
        >
          Próxima página →
        </Button>
      </div>

      <div className="text-center mt-3">
        <small>
          Página {pageIndex + 1} de {season.pages.length}
        </small>
      </div>

      <div className="text-center mt-4">
        <Button variant="outline-dark" onClick={() => navigate("/")}>
          Voltar
        </Button>
      </div>
    </Container>
  );
}

export default Season;
