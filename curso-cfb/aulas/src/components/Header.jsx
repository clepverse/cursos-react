import React from "react";

export default function Header() {
  const curso = () => {
    return "React";
  };
  const welcome = "Bem vindo!";
  return (
    <header className="flex h-14 flex-col items-center justify-center rounded-lg bg-slate-400 text-slate-800">
      <h1 className="">{welcome}</h1>
      <h1 className="">{`Curso de: ${curso()}`}</h1>
    </header>
  );
}
