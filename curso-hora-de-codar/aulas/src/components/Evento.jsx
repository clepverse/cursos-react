import React from "react";
import PropTypes from "prop-types";

export default function Evento({ numero }) {
  const meuEvento = () => {
    alert(`Evento ${numero}`);
  };

  return (
    <div>
      <p>Clique para disparar um evento:</p>
      <button className="w-20 bg-slate-500" onClick={meuEvento}>
        Ativar!
      </button>
    </div>
  );
}

Evento.propTypes = {
  numero: PropTypes.number,
};
