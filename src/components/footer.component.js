import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer text-center text-white py-5">
            ©2023 <b>Gustavo Cruz Pinheiro</b>. Todos os direitos reservados.
        </footer>
    );
  }
}
