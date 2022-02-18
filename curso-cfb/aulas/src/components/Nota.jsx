import React from "react";

export default function Nota(props) {
  return (
    <div>
      <legend className="">{`Informe a nota ${props.num}`}</legend>
      <input
        name={props.name}
        type="text"
        className=""
        value={props.nota}
        onChange={(e) => props.setNota(e)}
      />
    </div>
  );
}
