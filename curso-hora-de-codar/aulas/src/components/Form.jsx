import React, { useState } from "react";

export default function Form() {
  const cadastrarUsuario = (e) => {
    e.preventDefault();
    alert(`Usuario de ${nome} e senha ${password}cadastrado com sucesso!`);
  };

  const [nome, setNome] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div className="">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input className="cursor-pointer" type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}
