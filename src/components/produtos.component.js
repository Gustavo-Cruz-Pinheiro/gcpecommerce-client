import React, { Component } from "react";
import ProdutoDataService from "../services/produto.service";

export default class ProdutosList extends Component {
  constructor(props) {
    super(props);
    this.retrieveProdutos = this.retrieveProdutos.bind(this);
    this.refreshList = this.refreshList.bind(this);

    this.state = {
      produtos: []
    };
  }

  componentDidMount() {
    this.retrieveProdutos();
  }

  retrieveProdutos() {
    ProdutoDataService.getAll()
      .then(response => {
        this.setState({
          produtos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveProdutos();
  }

  render() {
    const {  produtos } = this.state;

    return (
      <div className="conteiner">
        <h4>Home</h4>
        <div className="row row-cols-1 row-cols-md-3">
          {produtos &&
              produtos.map((produto) => (
                <div className="col mb-4">
                  <div className="card h-100 shadow card-produtos">
                    {/* <img
                      src="img/noticia-fifa.webp"
                      className="card-img-top"
                      alt="capa da noticia"
                    /> */}
                    <div className="card-body">
                      <h5 className="card-title">
                        {produto.nome}
                      </h5>
                      <h6 className="card-subtitle mb-2 text-danger">
                        R$ {produto.preco}
                      </h6>
                      <p className="card-text">
                        {produto.descricao}
                      </p>
                    </div>
                  </div>
                </div>
          ))}
        </div>
      </div>
    );
  }
}
