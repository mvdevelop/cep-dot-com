
import React, { useState, useEffect } from "react";
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
    <div className="bg-gray-100 text-gray-900" id="home">

      {/* ================= Banner principal ================= */}
      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {[banner1, banner2, banner3].map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-[70vh] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="flex flex-col justify-center items-center text-center h-full text-white bg-black/50 px-4">
                  <h1 className="text-5xl font-extrabold">ENEM STATION</h1>
                  <p className="mt-4 text-lg max-w-3xl font-semibold">
                    O CEP (Copa do Ensino Público) é uma plataforma criada para organizar e
                    centralizar conteúdos de reforço escolar para estudantes de escolas públicas.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= Seção Conteúdo ================= */}
      <section className="py-12" id="conteudo">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-10">Conteúdo</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {content.map((season) => (
              <div key={season.id} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
                <Link to={`/season/${season.id}`} className="block text-gray-900">
                  <img
                    src={
                      new URL(
                        `../assets/img/${season["image-01"]}`,
                        import.meta.url
                      ).href
                    }
                    alt={season.name}
                    className="h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{season.name}</h3>
                    <p className="text-gray-500 text-sm mt-2">
                      {season.description.length > 90
                        ? season.description.slice(0, 90) + "..."
                        : season.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Seção Sobre ================= */}
      <section className="bg-gray-900 text-gray-200 py-12" id="sobre">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGEM */}
          <div>
            <img
              src="#"
              alt="Sobre CEP"
              className="w-full rounded shadow-lg"
            />
          </div>

          {/* TEXTO */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Sobre a CEP</h2>

            <p className="text-gray-400 mb-4">
              O CEP (Copa do Ensino Público) é uma plataforma criada para organizar e centralizar
              conteúdos de reforço escolar, reunindo materiais valiosos como resumos, videoaulas,
              exercícios, explicações e anotações.
            </p>

            <p className="text-gray-400">
              Nosso objetivo é aproximar os alunos do conhecimento, mostrando que o conteúdo certo
              no momento certo pode transformar o aprendizado e fortalecer a base escolar dos
              estudantes da rede pública.
            </p>
          </div>

        </div>
      </section>

      {/* Comentários */}
      <Coments />

      {/* Extra */}
      <Extra />

    </div>
  );
}

export default Home;
