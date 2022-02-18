import React from "react";

export default function Resultado(props) {
  return (
    <div>
      <p className=""> {`Soma das notas: ${props.somaNotas}`}</p>
      <p className="">{`${
        props.somaNotas >= 60 ? "Aprovado" : "Reprovado"
      }`}</p>
    </div>
  );
}
