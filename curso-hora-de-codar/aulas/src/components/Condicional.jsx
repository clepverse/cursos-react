import React, { useState } from "react";

export default function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  const enviarEmail = (e) => {
    e.preventDefault();
    setUserEmail(email);
  };

  const limparEmail = () => {
    setUserEmail("");
  };

  return (
    <div>
      <h2>Cadastre o seu e-email</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar e-mail
        </button>
        {userEmail && (
          <div>
            <p>{`O e-mail do usuario é:${userEmail}`}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
          </div>
        )}
      </form>
    </div>
  );
}
