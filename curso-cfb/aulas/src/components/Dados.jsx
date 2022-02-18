import React from "react";

export default function Dados(props) {
  let n1 = 10;
  let n2 = 10;
  return (
    <section className="">
      <p className="">Nome: {props.nome}</p>
      <p className="">Sobrenome: {props.sobrenome}</p>
      <p className="">Curso: {props.curso}</p>
      <p className="">{`A soma de ${n1} com ${n2} é igual a: ${props.somar(
        n1,
        n2
      )} `}</p>
    </section>
  );
}
