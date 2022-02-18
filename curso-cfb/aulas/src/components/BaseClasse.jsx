import React from "react";

export default class BaseClasse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Clep",
      curso: "React",
      ativo: true,
    };
    let ad = this.ativarDesativar.bind(this);
  }

  ativarDesativar() {
    this.setState((state) => ({
      ativo: !state.ativo,
    }));
  }

  componentDidMount() {
    console.log("Componente montado!");
  }

  componentDidUpdate() {
    console.log("Componente atualizado!");
  }

  componentWillUnmount() {
    console.log("Componente desmontado!");
  }

  render() {
    return (
      <div>
        <h1>BaseClasse</h1>
        <button onClick={this.ad}>Ativar/Desativar</button>
      </div>
    );
  }
}
