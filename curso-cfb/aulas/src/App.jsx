import React, { useState } from "react";
import BaseClasse from "./components/BaseClasse";

import Carro from "./components/Carro";
// import Classe from "./components/Classe";
// import Header from "./components/Header";
// import Nota from "./components/Nota";
// import Resultado from "./components/Resultado";
// import Led from "./components/Led";
// import Corpo from "./components/Corpo";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Numero from "./components/Numero";
// import Relogio from "./components/Relogio";

export default function App() {
  // const [form, setForm] = useState({
  //   nome: "",
  //   curso: "",
  //   ano: "",
  // });

  // const handleFormChange = ({ target }) => {
  //   const valor = target.getAttribute("name");
  //   if (valor !== "") {
  //     setForm({
  //       nome: valor === "fnome" ? target.value : form.nome,
  //       curso: valor === "fcurso" ? target.value : form.curso,
  //       ano: valor === "fano" ? target.value : form.ano,
  //     });
  //   }
  // };

  // const [nome, setNome] = useState("");
  // const [carro, setCarro] = useState("HRV");

  // const handleChangeNome = (e) => {
  //   setNome(e.target.value);
  // };

  // const handleChangeCarros = (e) => {
  //   setCarro(e.target.value);
  // };

  // const carros = ["HRV", "Golf", "Focus", "Cruze", "Argo"];

  // const listaCarros = carros.map((c, i) => (
  //   <p className="" key={i}>
  //     {`${i} -
  //     ${c}`}
  //   </p>
  // ));

  // const [cor, setCor] = useState(1);

  // const vermelho = { color: "#f00" };
  // const verde = { color: "#0f0" };
  // const azul = { color: "#00f" };

  // const retCor = (c) => {
  //   if (c === 1) {
  //     return vermelho;
  //   } else if (c === 2) {
  //     return verde;
  //   } else if (c === 3) {
  //     return azul;
  //   }
  // };

  // const mudaCor = () => {
  //   setCor(cor + 1);
  //   if (cor > 2) {
  //     setCor(0);
  //   }
  // };

  // const [log, setLog] = useState(false);

  // const msgLogin = () => {
  //   return "Usuario Logado";
  // };

  // const msgLogoff = () => {
  //   return "Favor logar";
  // };

  // const comprimento = () => {
  //   const hora = new Date().getHours();
  //   if (hora >= 0 && hora < 13) {
  //     return <p>Bom dia!</p>;
  //   } else if (hora >= 13 && hora < 18) {
  //     return <p>Boa tarde!</p>;
  //   } else {
  //     return <p>Boa noite!</p>;
  //   }
  // };

  // const [ligado, setLigado] = useState(false);

  // const cancelar = (obj) => {
  //   return obj.preventDefault();
  // };

  // const [num, setNum] = useState(10);

  // const [nome, setNome] = useState("Clep");

  // const [notas, setNotas] = useState({
  //   nota1: "",
  //   nota2: "",
  //   nota3: "",
  //   nota4: "",
  // });

  // const handleNotasChange = ({ target }) => {
  //   const valor = target.getAttribute("name");
  //   if (valor !== "") {
  //     setNotas({
  //       ...notas,
  //       [valor]: target.value,
  //     });
  //   }
  // };

  // const [contagem, setContagem] = useState(0);

  // useEffect(() => {
  //   document.title = "Contagem: " + contagem;
  // });

  // const [nome, setNome] = useState();

  // const armazenarNome = (chave, value) => {
  //   localStorage.setItem(chave, value);
  // };

  // const consultar = (chave) => {
  //   alert(localStorage.getItem(chave));
  // };

  // const apagar = (chave) => {
  //   localStorage.removeItem(chave);
  // };

  // const [mostrar, setMostrar] = useState(true);

  // const mostrarOcultar = () => {
  //   setMostrar(!mostrar);
  // };

  return (
    <div className="mx-auto max-w-screen-lg space-y-8 px-3.5">
      {/* <button
        className="w-36 rounded-md bg-gray-300 px-2 py-0.5"
        onClick={() => mostrarOcultar()}
      >
        {mostrar ? "Ocultar" : "Mostrar"}
      </button>
      {mostrar ? <Carro fator={10} /> : null} */}

      {/* <Classe curso="React" />
      

       <label>Digite um nome:</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button
        className="mx-2 bg-pink-300 px-2"
        onClick={() => armazenarNome("ls_nome", nome)}
      >
        Gravar nome
      </button>
      <button
        className="mx-2 bg-pink-300 px-2"
        onClick={() => consultar("ls_nome")}
      >
        Consultar
      </button>
      <button
        className="mx-2 bg-pink-300 px-2"
        onClick={() => apagar("ls_nome")}
      >
        Apagar
      </button> 

      <p className="">{`Contagem: ${contagem}`}</p>
      <button className="" onClick={() => setContagem(contagem + 1)}>
        Contar
      </button> 

      <Nota
        name={"nota1"}
        num={1}
        nota={notas.nota1}
        setNota={handleNotasChange}
      />
      <Nota
        name={"nota2"}
        num={2}
        nota={notas.nota2}
        setNota={handleNotasChange}
      />
      <Nota
        name={"nota3"}
        num={3}
        nota={notas.nota3}
        setNota={handleNotasChange}
      />
      <Nota
        name={"nota4"}
        num={4}
        nota={notas.nota4}
        setNota={handleNotasChange}
      />
      <Resultado
        somaNotas={
          parseFloat(notas.nota1) +
          parseFloat(notas.nota2) +
          parseFloat(notas.nota3) +
          parseFloat(notas.nota4)
        }
      />

      <label className="">Nome: </label>
      <input
        name="fnome"
        type="text"
        className="rounded-md border border-gray-400"
        value={form.nome}
        onChange={(target) => handleFormChange(target)}
      />

      <label className="">Curso: </label>
      <input
        name="fcurso"
        type="text"
        className="rounded-md border border-gray-400"
        values={form.curso}
        onChange={(target) => handleFormChange(target)}
      />

      <label className="">Ano: </label>
      <input
        name="fano"
        type="text"
        className="rounded-md border border-gray-400"
        values={form.ano}
        onChange={(target) => handleFormChange(target)}
      />

      <p className="">{`Nome digitado: ${form.nome}`}</p>
      <p className="">{`Curso digitado: ${form.curso}`}</p>
      <p className="">{`Ano digitado: ${form.ano}`}</p>
      <label className="">Selecione um carro: </label>
      <select values={carro} onChange={(e) => handleChangeCarros(e)}>
        <option value="HRV" className="">
          HRV
        </option>
        <option value="Golf" className="">
          Golf
        </option>
        <option value="Cruze" className="">
          Cruze
        </option>
        <option value="Argo" className="">
          Argo
        </option>
      </select>
      <p className="">{`Carro selecionado ${carro}`}</p>
      {/*{listaCarros}

      <h1 style={retCor(cor)} className="text-4xl font-semibold">
        Curso React.js
      </h1>
      <button
        className="w-32 rounded-md bg-gray-300 p-2"
        onClick={() => mudaCor()}
      >
        Mudar Cor
      </button>

      {comprimento()}

       <p className="">{log ? msgLogin() : msgLogoff()}</p>
      <button className="w-40 bg-red-300 px-4" onClick={() => setLog(!log)}>
        {log ? "Logout" : "Login"}
      </button> 

      <Led ligado={ligado} setLigado={setLigado} />
      <a
        href="http://youtube.com"
        target="_blank"
        onClick={(e) => cancelar(e)}
        rel="noreferrer"
      >
        LINK
      </a> 

      <Relogio />
      <Header />
      <Corpo />
      <p className="">{`Valor do state em App: ${num}`}</p>
      <Numero num={num} setNum={setNum} />
      <h1 className="">{`Meu nick: ${nome}`}</h1>

      <button className="" onClick={() => setNome("Aldo")}>
        Mudar nome
      </button> */}
    </div>
  );
}
