import React from "react";

class Classe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <p>{this.props.curso}</p>
      </>
    );
  }
}

export default Classe;
