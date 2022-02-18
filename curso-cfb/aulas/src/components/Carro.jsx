import React from "react";

class Carro extends React.Component {
  constructor(props) {
    super(props);
    this.modelo = "HRV";
    this.state = {
      ligado: false,
      velAtual: 0,
    };
    this.ld = this.ligarDesligar.bind(this);
  }

  ligarDesligar() {
    this.setState((state) => ({
      ligado: !state.ligado,
    }));
  }

  acelerar() {
    if (this.state.ligado === true) {
      if (this.state.velAtual < 100) {
        this.setState((state, props) => ({
          velAtual: state.velAtual + props.fator,
        }));
      } else {
        alert("Velocidade máxima atingida!");
      }
    } else {
      return alert("O carro está desligado!");
    }
  }

  desacelerar() {
    if (this.state.ligado === true) {
      if (this.state.velAtual > 0) {
        this.setState((state, props) => ({
          velAtual: state.velAtual - props.fator,
        }));
      } else {
        alert("Velocidade mínima atingida!");
      }
    } else {
      return alert("O carro está desligado!");
    }
  }

  componentDidMount() {
    console.log("Componente montado!");
  }

  // componentDidUpdate() {
  //   console.log("Componente atualizado!");
  // }

  componentWillUnmount() {
    console.log("Componente desmontado!");
  }

  render() {
    return (
      <>
        <h1>Meu Carro</h1>
        <p>{`Modelo: ${this.modelo}`}</p>
        <p>{`Ligado: ${this.state.ligado ? "Sim" : "Não"}`}</p>
        <p>{`Velocidade atual: ${this.state.velAtual} km/h`}</p>
        <button
          className="w-36 rounded-md bg-gray-300 px-2 py-0.5"
          onClick={this.ld}
        >
          {`${this.state.ligado ? "Desligar" : "Ligar"}`}
        </button>
        <button
          className="w-36 rounded-md bg-gray-300 px-2 py-0.5"
          onClick={() => this.acelerar()}
        >
          Acelerar
        </button>
        <button
          className="w-36 rounded-md bg-gray-300 px-2 py-0.5"
          onClick={() => this.desacelerar()}
        >
          Desacelerar
        </button>
      </>
    );
  }
}

export default Carro;
