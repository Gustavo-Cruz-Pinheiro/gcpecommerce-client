import React, { Component } from "react";
import ProdutoDataService from "../services/produto.service";
import { withRouter } from '../common/with-router';

class Produto extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeDescricao = this.onChangeDescricao.bind(this);
    this.onChangePreco = this.onChangePreco.bind(this);
    this.getProduto = this.getProduto.bind(this);
    this.updateProduto = this.updateProduto.bind(this);
    this.deleteProduto = this.deleteProduto.bind(this);

    this.state = {
      currentProduto: {
        id: null,
        nome: "",
        descricao: "", 
        preco: 0.0,
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getProduto(this.props.router.params.id);
  }

  onChangeNome(e) {
    const nome = e.target.value;

    this.setState(function(prevState) {
      return {
        currentProduto: {
          ...prevState.currentProduto,
          nome: nome
        }
      };
    });
  }

  onChangeDescricao(e) {
    const descricao = e.target.value;
    
    this.setState(prevState => ({
      currentProduto: {
        ...prevState.currentProduto,
        descricao: descricao
      }
    }));
  }

  onChangePreco(e) {
    const preco = e.target.value;
    
    this.setState(prevState => ({
      currentProduto: {
        ...prevState.currentProduto,
        preco: preco
      }
    }));
  }

  getProduto(id) {
    ProdutoDataService.get(id)
      .then(response => {
        this.setState({
          currentProduto: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  updateProduto() {
    ProdutoDataService.update(
      this.state.currentProduto.id,
      this.state.currentProduto
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "O produto foi alterado com sucesso!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteProduto() {    
    ProdutoDataService.delete(this.state.currentProduto.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/produtos');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentProduto } = this.state;

    return (
      <div>
        {currentProduto ? (
          <div className="edit-form">
            <h4>Produto</h4>
            <form>
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  value={currentProduto.nome}
                  onChange={this.onChangeNome}
                />
              </div>
              <div className="form-group">
                <label htmlFor="descricao">Descrição</label>
                <input
                  type="text"
                  className="form-control"
                  id="descricao"
                  value={currentProduto.descricao}
                  onChange={this.onChangeDescricao}
                />
              </div>
              <div className="form-group">
                <label htmlFor="preco">Preco</label>
                <input
                  type="number"
                  className="form-control"
                  id="preco"
                  value={currentProduto.preco}
                  onChange={this.onChangePreco}
                />
              </div>
              
            </form>

            <button
              className="btn btn-danger mr-2"
              onClick={this.deleteProduto}
            >
              Deletar
            </button>

            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updateProduto}
            >
              Alterar
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Por favor clique em um produto...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Produto);