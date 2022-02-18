import React from "react";

export default function Numero(props) {
  return (
    <>
      <p className="">{`Valor do state em Numero: ${props.num}`}</p>
      <button className="" onClick={() => props.setNum(props.num + 10)}>
        Soma 10
      </button>
    </>
  );
}
