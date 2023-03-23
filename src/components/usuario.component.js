import React, { Component } from "react";
import UsuarioDataService from "../services/usuario.service";
import { withRouter } from '../common/with-router';

class Usuario extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSenha = this.onChangeSenha.bind(this);
    this.getUsuario = this.getUsuario.bind(this);
    this.updateUsuario = this.updateUsuario.bind(this);
    this.deleteUsuario = this.deleteUsuario.bind(this);

    this.state = {
      currentUsuario: {
        id: null,
        email: "",
        senha: "",
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getUsuario(this.props.router.params.id);
  }

  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUsuario: {
          ...prevState.currentUsuario,
          email: email
        }
      };
    });
  }

  onChangeSenha(e) {
    const senha = e.target.value;
    
    this.setState(prevState => ({
      currentUsuario: {
        ...prevState.currentUsuario,
        senha: senha
      }
    }));
  }

  getUsuario(id) {
    UsuarioDataService.get(id)
      .then(response => {
        this.setState({
          currentUsuario: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  updateUsuario() {
    UsuarioDataService.update(
      this.state.currentUsuario.id,
      this.state.currentUsuario
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "O usuário foi alterado com sucesso!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteUsuario() {    
    UsuarioDataService.delete(this.state.currentUsuario.id)
      .then(response => {
        console.log(response.data);
        localStorage.clear();
        this.props.router.navigate('/');
        window.location.reload();
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentUsuario } = this.state;

    return (
      <div>
        {currentUsuario ? (
          <div className="edit-form">
            <h4>Usuário</h4>
            <form>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={currentUsuario.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  value={currentUsuario.senha}
                  onChange={this.onChangeSenha}
                />
              </div>
              
            </form>

            <button
              className="btn btn-danger mr-2"
              onClick={this.deleteUsuario}
            >
              Deletar
            </button>

            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updateUsuario}
            >
              Alterar
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Por favor clique em um usuário...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Usuario);