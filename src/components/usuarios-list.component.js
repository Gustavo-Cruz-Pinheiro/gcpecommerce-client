import React, { Component } from "react";
import UsuarioDataService from "../services/usuario.service";
import { Link } from "react-router-dom";

export default class UsuariosList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchEmail = this.onChangeSearchEmail.bind(this);
    this.retrieveUsuarios = this.retrieveUsuarios.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUsuario = this.setActiveUsuario.bind(this);
    this.removeAllUsuarios = this.removeAllUsuarios.bind(this);
    this.searchEmail = this.searchEmail.bind(this);

    this.state = {
      usuarios: [],
      currentUsuario: null,
      currentIndex: -1,
      searchEmail: ""
    };
  }

  componentDidMount() {
    this.retrieveUsuarios();
  }

  onChangeSearchEmail(e) {
    const searchEmail = e.target.value;

    this.setState({
      searchEmail: searchEmail
    });
  }

  retrieveUsuarios() {
    UsuarioDataService.getAll()
      .then(response => {
        this.setState({
          usuarios: response.data
        });
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveUsuarios();
    this.setState({
      currentUsuario: null,
      currentIndex: -1
    });
  }

  setActiveUsuario(usuario, index) {
    this.setState({
      currentUsuario: usuario,
      currentIndex: index
    });
  }

  removeAllUsuarios() {
    UsuarioDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchEmail() {
    this.setState({
      currentUsuario: null,
      currentIndex: -1
    });

    UsuarioDataService.findByEmail(this.state.searchEmail)
      .then(response => {
        this.setState({
          usuarios: response.data
        });
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchEmail, usuarios, currentUsuario, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <h4>Usuários Lista</h4>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Procurar por e-mail"
              value={searchEmail}
              onChange={this.onChangeSearchEmail}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchEmail}
              >
                Procurar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <ul className="list-group">
            {usuarios &&
              usuarios.map((usuario, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveUsuario(usuario, index)}
                  key={index}
                >
                  {usuario.email}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllUsuarios}
          >
            Apagar Todos
          </button>
        </div>
        <div className="col-md-6">
          {currentUsuario ? (
            <div>
              <h4>Usuário</h4>
              <div>
                <label>
                  <strong>E-mail:</strong>
                </label>{" "}
                {currentUsuario.email}
              </div>
              <div>
                <label>
                  <strong>Senha:</strong>
                </label>{" "}
                {currentUsuario.senha}
              </div>

              <Link
                to={"/usuarios/" + currentUsuario.id}
                className="badge badge-warning"
              >
                Editar
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Por favor clique em um usuário...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
