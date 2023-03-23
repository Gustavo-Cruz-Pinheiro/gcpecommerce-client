import React, { Component } from "react";
import ProdutoDataService from "../services/produto.service";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export default class AddProduto extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeDescricao = this.onChangeDescricao.bind(this);
    this.onChangePreco = this.onChangePreco.bind(this);
    this.saveProduto = this.saveProduto.bind(this);
    this.newProduto = this.newProduto.bind(this);

    this.state = {
      id: null,
      nome: "",
      descricao: "", 
      preco: "",

      submitted: false
    };
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }

  onChangeDescricao(e) {
    this.setState({
      descricao: e.target.value
    });
  }

  onChangePreco(e) {
    this.setState({
      preco: e.target.value
    });
  }

  saveProduto() {
    if(this.state.nome == "" || this.state.preco == "" || this.state.descricao == "") {
      toast.error('Não podem haver campos em branco!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    var data = {
      nome: this.state.nome,
      descricao: this.state.descricao,
      preco: this.state.preco
    };

    ProdutoDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          nome: response.data.nome,
          descricao: response.data.descricao,
          preco: response.data.preco,

          submitted: true
        });

        // console.log(response.data);

        toast.success('Produto cadastrado com sucesso!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        
        this.setState({
          id: null,
          nome: "",
          descricao: "",
          preco: "",
    
          submitted: false
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  newProduto() {
    this.setState({
      id: null,
      nome: "",
      descricao: "",
      preco: "",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {/* {this.state.submitted ? (
          <div>
            <h4>Você salvou o produto com sucesso!</h4>
            <button className="btn btn-success" onClick={this.newProduto}>
              Adicionar outro
            </button>
          </div>
        ) : ( */}
          <div>
            <h4>Adicionar Produto</h4>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                required
                value={this.state.nome}
                onChange={this.onChangeNome}
                name="nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="descricao">Descrição</label>
              <input
                type="text"
                className="form-control"
                id="descricao"
                required
                value={this.state.descricao}
                onChange={this.onChangeDescricao}
                name="descricao"
              />
            </div>

            <div className="form-group">
              <label htmlFor="preco">Preço</label>
              <input
                type="number"
                className="form-control"
                id="preco"
                required
                value={this.state.preco}
                onChange={this.onChangePreco}
                name="preco"
              />
            </div>

            <button onClick={this.saveProduto} className="btn btn-success">
              Cadastrar
            </button>
            <ToastContainer />
          </div>
        {/* )} */}
      </div>
    );
  }
}
