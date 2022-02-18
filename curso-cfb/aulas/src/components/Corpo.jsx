import React from "react";
import Dados from "./Dados";

export default function Corpo() {
  const nome = "Clep";
  const sobrenome = "Biluteteia";
  const curso = "React.js";

  const somar = (v1, v2) => {
    return v1 + v2;
  };

  return (
    <section className="h-96 space-y-2 rounded-lg bg-slate-400 p-4">
      <ul className="grid grid-cols-2 gap-10">
        <li className="h-44 rounded-lg bg-slate-200">1</li>
        <li className="h-44 rounded-lg bg-slate-200">2</li>
      </ul>
      <div className="">
        <Dados nome={nome} sobrenome={sobrenome} curso={curso} somar={somar} />
      </div>
    </section>
  );
}
