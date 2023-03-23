import React, { Component } from "react";
import UsuarioDataService from "../../services/usuario.service";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Footer from '../../components/footer.component';

import 'react-toastify/dist/ReactToastify.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSenha = this.onChangeSenha.bind(this);
    this.login = this.login.bind(this);

    this.state = {
      email: "",
      senha: "", 
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

  login() {
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
    }

    var data = {
      email: this.state.email,
      senha: this.state.senha
    };

    UsuarioDataService.login(data)
      .then(response => {
        const page = response.data.id;

        if (response.data.id) {
          localStorage.setItem('@user', JSON.stringify(response.data));
          window.location.reload();
        } else {
          toast.error(response.data.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }

        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <div className="container-fluid login-container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5 card-login">
                        <div className="card-body p-4 p-sm-5">
                            <h2 className="card-title text-center mb-5">Login</h2>
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

                            <button onClick={this.login} className="btn btn-success btn-lg btn-block">
                              Entrar
                            </button>
                            <Link to={"/adicionar_usuario"} className="btn btn-primary btn-lg btn-block">
                              Criar Conta
                            </Link>
                            
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        <Footer/>
        </div>
    );
  }
}
