import React, { Component } from 'react';

export default class Conversor extends Component {
  
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);  

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    }

    // bind for fornecer o this fora
    this.conversor = this.conversor.bind(this)
  }

  conversor(){
    let from_to = `${this.props.moedaA}_${this.props.moedaB}`;
    // url from convert
    let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=fff18b66ff605ff4f08a`;

    fetch(url).then(res=>{
      return res.json()
    })
    .then(json=>{
      let price = json[from_to].val;
      let moedaB_valor = (parseFloat(this.state.moedaA_valor) * price).toFixed(2);
      this.setState({moedaB_valor});
    })
  }
  render() {
    return (
      <div className="conversor">
        <h2>{this.props.moedaA} for {this.props.moedaB}</h2>
        <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}/>
        <button onClick={(this.conversor)}>Converter</button>

        <h2>{this.state.moedaB_valor}</h2>
      </div>
    )
  }
}
