import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

import Login from "../pages/Login";
import Home from "../pages/Home";
import AddProduto from "../pages/AdicionarProduto";
import Produto from "../pages/GerenciarProduto";
import ProdutosList from "../pages/ListaProdutos";
import AddUsuario from "../pages/AdicionarUsuario";
import Usuario from "../pages/GerenciarUsuario";
import UsuariosList from "../pages/ListaUsuarios";

const logado = localStorage.getItem('@user');

const Rotas = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {!logado && <Route path="/" element={<Login />} />}
                    {!logado && <Route path="/login" element={<Login />} />}
                    {logado && <Route path="/" element={<Home />} />}
                    {!logado && <Route path="/adicionar_usuario" element={<AddUsuario />} />}
                    {logado && <Route path="/" element={<AddUsuario />} />}
                    {logado && <Route path="/adicionar_produto" element={<AddProduto />} />}
                    {logado && <Route path="/produtos" element={<ProdutosList />} />}
                    {logado && <Route path="/produtos/:id" element={<Produto />} />}
                    {logado && <Route path="/usuarios" element={<UsuariosList />} />}
                    {logado && <Route path="/usuarios/:id" element={<Usuario />} />}
                    {!logado && <Route path="/adicionar_produto" element={<Login />} />}
                    {!logado && <Route path="/produtos" element={<Login />} />}
                    {!logado && <Route path="/produtos/:id" element={<Login />} />}
                    {!logado && <Route path="/usuarios" element={<Login />} />}
                    {!logado && <Route path="/usuarios/:id" element={<Login />} />}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Rotas;