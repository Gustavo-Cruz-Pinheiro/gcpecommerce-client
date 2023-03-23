import React, { Component } from "react";
import UsuarioDataService from "../services/usuario.service";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

export default class AddUsuario extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSenha = this.onChangeSenha.bind(this);
    this.saveUsuario = this.saveUsuario.bind(this);
    this.newUsuario = this.newUsuario.bind(this);

    this.state = {
      id: null,
      email: "",
      senha: "", 

      submitted: false
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeSenha(e) {
    this.setState({
      senha: e.target.value
    });
  }

  saveUsuario() {
    if(this.state.email == "" || this.state.senha == "") {
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
    } else {
      var verify = false;
      var repite = false;
      for (let i = 0; i < this.state.email.length; i++) {
        var element = this.state.email[i];

        if (element == "@") {
          if (!verify) {
            verify = true;
          } else if(verify) {
            repite = true;
          }
        }
      }

      if (!verify || repite) {
        toast.error('E-mail inválido!', {
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
    }

    var data = {
      email: this.state.email,
      senha: this.state.senha
    };

    UsuarioDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          email: response.data.email,
          senha: response.data.senha,

          submitted: true
        });

        // console.log(response.data);
        
        toast.success('Cadastro realizado com sucesso!', {
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
          email: "",
          senha: "",
    
          submitted: false
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUsuario() {
    this.setState({
      id: null,
      email: "",
      senha: "",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {/* {this.state.submitted ? (
          <div>
            <h4>Você salvou o usuário com sucesso!</h4>
            <button className="btn btn-success" onClick={this.newUsuario}>
              Adicionar outro
            </button>
          </div>
        ) : ( */}
          <div>
            <h4>Adicionar Usuário</h4>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                className="form-control"
                id="senha"
                required
                value={this.state.senha}
                onChange={this.onChangeSenha}
                name="senha"
              />
            </div>


            <div className="row">
              <button onClick={this.saveUsuario} className="btn btn-success">
                Cadastrar
              </button>
              <Link to={"/"} className="btn btn-warning ml-2">
                Voltar
              </Link>
            </div>
            <ToastContainer />
          </div>
        {/* )} */}
      </div>
    );
  }
}
