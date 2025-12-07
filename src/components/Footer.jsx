
import React from "react";
import logo from "../../public/icon.ico";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-5 mt-auto">
      <div className="max-w-7xl mx-auto px-4">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* COLUNA 1 - Logo e descrição */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="CEP Logo"
                className="w-12 h-12 mr-2"
              />
              <h4 className="text-xl font-bold">CEP</h4>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              O CEP (Copa do Ensino Público) é uma plataforma criada para organizar e centralizar conteúdos de reforço escolar para estudantes de escolas públicas. Aqui, você encontra materiais como resumos, videoaulas, exercícios, links úteis e anotações.
              O objetivo é ajudar cada aluno a aprender de forma eficiente, estruturada e preparada para superar desafios acadêmicos.
            </p>
          </div>

          {/* COLUNA 2 - Navegação */}
          <div>
            <h6 className="uppercase font-bold mb-3 text-sm tracking-wide">Navegação</h6>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Content</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Extra</a></li>
            </ul>
          </div>

          {/* COLUNA 3 - Recursos */}
          <div>
            <h6 className="uppercase font-bold mb-3 text-sm tracking-wide">Recursos</h6>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Sobre a HQ</a></li>
              <li><a href="#" className="hover:text-white">Personagens</a></li>
              <li><a href="#" className="hover:text-white">Capítulos</a></li>
              <li><a href="#" className="hover:text-white">Galeria</a></li>
            </ul>
          </div>

          {/* COLUNA 4 - Contato */}
          <div>
            <h6 className="uppercase font-bold mb-3 text-sm tracking-wide">Contato</h6>
            <p className="text-gray-400 text-sm mb-1">📧 contato@elo.com</p>
            <p className="text-gray-400 text-sm mb-1">📍 São Paulo, Brasil</p>
            <p className="text-gray-400 text-sm">📞 +55 (11) 99999-9999</p>
          </div>

        </div>

        {/* Divisor */}
        <hr className="border-gray-700 my-6" />

        {/* Direitos Autorais */}
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} <strong>Elo.com</strong> — Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
