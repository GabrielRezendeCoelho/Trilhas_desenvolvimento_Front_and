import React from "react";
import "../styles/exercicio_4_gallery.css";

const Exercicio4Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Galeria de Imagens</h2>
      <div className="gallery">
        {[...Array(8)].map((_, i) => (
          <img
            key={i}
            src={`https://picsum.photos/200?random=${i + 1}`}
            alt={`Imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Exercicio4Gallery;
