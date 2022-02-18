import React from "react";

export default function Pessoa({ foto, nome, idade, profissao }) {
  return (
    <div>
      <img src={foto} alt="" />
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissao: {profissao}</p>
    </div>
  );
}
