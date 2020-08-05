import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E35AQGezYWrj_6G5g/profile-framedphoto-shrink_100_100/0?e=1596679200&v=beta&t=AmGeyhnR4W_SSGSLyNnwBUXGCsFxXoicAzvA83MnBKk"
          alt="Sanzio Wesley"
        />
        <div>
          <strong>Sanzio Wesley</strong>
          <span>Empreendorismo</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de desenvolvimento e
        empreendedorismo.
        <br />
        <br />
        Apaixonado por tecnologia e ideias.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 150,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
