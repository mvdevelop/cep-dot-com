
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import temporadasData from "../data/Temporadas.json";

import banner1 from "../assets/img/banner1.jpg";
import banner2 from "../assets/img/banner2.jpg";
import banner3 from "../assets/img/banner3.jpg";
import Extra from "./Extra";

function Home() {
  const [temporadas, setTemporadas] = useState([]);
  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem("elo_comments");
    return saved ? JSON.parse(saved) : [];
  });
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    setTemporadas(temporadasData);
  }, []);

  useEffect(() => {
    localStorage.setItem("elo_comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment.trim(),
      date: new Date().toLocaleString("pt-BR"),
    };
    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div className="bg-light text-dark" id="home">
      {/* ===== Banner principal ===== */}
      <section className="position-relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {[banner1, banner2, banner3].map((img, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "70vh",
                  position: "relative",
                }}
              >
                <div className="d-flex flex-column justify-content-center align-items-center text-center h-100 text-white bg-dark bg-opacity-50">
                  <h1 className="display-4 fw-bold">Bem-vindo</h1>
                  <p className="lead">Mergulhe no universo de ELO</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ===== Seção Seasons ===== */}
      <section className="py-5" id="temporadas">
        <Container>
          <h2 className="text-center mb-4 fw-bold">Temporadas</h2>
          <Row className="g-4">
            {temporadas.map((season) => (
              <Col key={season.id} xs={12} sm={6} md={3}>
                <Card className="border-0 shadow-sm h-100">
                  <Link
                    to={`/season/${season.id}`}
                    className="text-decoration-none text-dark"
                  >
                    <Card.Img
                      variant="top"
                      src={
                        new URL(
                          `../assets/img/${season["image-01"]}`,
                          import.meta.url
                        ).href
                      }
                      alt={season.name}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                      className="hover-zoom"
                    />
                    <Card.Body>
                      <Card.Title className="fw-semibold">
                        {season.name}
                      </Card.Title>
                      <Card.Text className="text-secondary small">
                        {season.description.length > 90
                          ? season.description.slice(0, 90) + "..."
                          : season.description}
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== Seção About ===== */}
      <section className="bg-dark text-light py-5" id="sobre">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src="#"
                alt="About Elo.com"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={6} className="mt-4 mt-md-0">
              <h2 className="fw-bold mb-3">Sobre a HQ</h2>
              <p className="text-secondary">
                A Elo.com é uma HQ original que combina narrativa intensa,
                personagens marcantes e um universo visualmente impactante.
                Criada com dedicação e paixão, cada temporada traz novas
                aventuras, desafios e descobertas.
              </p>
              <p className="text-secondary">
                Nossa missão é conectar leitores ao poder da imaginação,
                mostrando que toda história pode criar um elo entre mundos.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Extra />

      {/* ===== Seção de Comentários ===== */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4 fw-bold">Fórum dos Leitores 💬</h2>

          {/* Formulário */}
          <Form onSubmit={handleAddComment} className="mb-4">
            <Row className="justify-content-center">
              <Col md={8}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Compartilhe sua opinião sobre as temporadas..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
              </Col>
              <Col md="auto" className="mt-3 mt-md-0">
                <Button type="submit" variant="dark">
                  Publicar
                </Button>
              </Col>
            </Row>
          </Form>

          {/* Lista de comentários */}
          <Row className="justify-content-center">
            <Col md={10}>
              {comments.length === 0 ? (
                <p className="text-center text-secondary">
                  Nenhum comentário ainda. Seja o primeiro a participar!
                </p>
              ) : (
                comments.map((c) => (
                  <Card key={c.id} className="mb-3 shadow-sm border-0">
                    <Card.Body>
                      <Card.Text>{c.text}</Card.Text>
                      <small className="text-secondary">{c.date}</small>
                    </Card.Body>
                  </Card>
                ))
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
