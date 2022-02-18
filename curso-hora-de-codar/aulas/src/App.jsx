import { useState } from "react";
import SeuNome from "./components/SeuNome";
import Footer from "./Footer";

// import Condicional from "./components/Condicional";
// import Evento from "./components/Evento";
// import Form from "./components/Form";
// import Pessoa from "./components/Pessoa";
// import SayMyName from "./components/SayMyName";
// import OutraLista from "./OutraLista";

export default function App() {
  // const nome = "clepzin";

  // const pessoa = {
  //   nome: "Aldo",
  //   idade: "23",
  //   profissao: "Desenvolvedor",
  //   foto: "https://avatars2.githubusercontent.com/u/56965?s=460&v=4",
  // };

  // const meusItens = ["React", "Vue", "Angular"];

  const [nome, setNome] = useState();

  return (
    <>
      {/* <h1 className="text-6xl">Hello world!</h1>
      <SayMyName nome={nome} />
      <Pessoa
        foto={pessoa.foto}
        nome={pessoa.nome}
        idade={pessoa.idade}
        profissao={pessoa.profissao}
      /> */}

      {/* <Evento numero={1} />
      <Evento numero={2} />
      <Form /> */}

      {/* <Condicional /> */}

      {/* <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} /> */}

      {/* <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      {nome && <p>Seu nome é: {nome}</p>} */}

      <Footer />
    </>
  );
}
