
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import contentData from "../data/Content.json";

import banner1 from "../assets/img/banner3.jpeg";
import banner2 from "../assets/img/banner2.jpg";
import banner3 from "../assets/img/banner.webp";

import Extra from "./Extra";
import Coments from "../components/Coments";

function Home() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(contentData);
  }, []);

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
                  <h1 className="display-4 fw-bold">Dev Library</h1>
                  <p className="lead fw-bold container">A Dev Library é uma aplicação criada para organizar e centralizar conteúdos de estudo em desenvolvimento, como artigos, vídeos, links, códigos e anotações. Ela funciona como uma biblioteca pessoal de aprendizado, oferecendo uma interface rápida e intuitiva para pesquisar, visualizar e gerenciar materiais, ajudando o usuário a estudar de forma mais eficiente e estruturada.</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ===== Seção Seasons ===== */}
      <section className="py-5" id="conteudo">
        <Container>
          <h2 className="text-center mb-4 fw-bold">Conteúdo</h2>
          <Row className="g-4">
            {content.map((season) => (
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
                alt="About Dev Lib"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={6} className="mt-4 mt-md-0">
              <h2 className="fw-bold mb-3">Sobre a Dev Library</h2>
              <p className="text-secondary">
                A Dev Library é uma plataforma criada para organizar e centralizar conteúdos
                de estudo em desenvolvimento, reunindo materiais valiosos como artigos, vídeos,
                códigos e anotações. Construída com dedicação e foco no aprendizado contínuo,
                cada nova categoria e recurso adiciona mais possibilidades à sua jornada.
              </p>

              <p className="text-secondary">
                Nossa missão é conectar desenvolvedores ao conhecimento, mostrando que todo
                conteúdo certo no momento certo pode ser um passo essencial na evolução de
                qualquer pessoa na área tech.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Coments />

      <Extra />
    </div>
  );
}

export default Home;
