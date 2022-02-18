import React from "react";
import LedVerde from "./imgs/led_verde.png";
import LedVermelho from "./imgs/led_vermelho.png";

export default function Led(props) {
  return (
    <>
      <img
        src={props.ligado ? LedVerde : LedVermelho}
        alt=""
        className="w-20"
      />
      <button
        className="w-40 rounded-lg border-2 bg-gray-300 px-6 py-1 font-semibold text-slate-900"
        onClick={() => props.setLigado(!props.ligado)}
      >
        {props.ligado ? "Desligar" : "Ligar"}
      </button>
    </>
  );
}
