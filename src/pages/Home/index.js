import React from 'react';
import Nav from '../../components/nav.component';
import Footer from '../../components/footer.component';
import Produtos from '../../components/produtos.component';
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
    const sair = () => {
        localStorage.clear();
        window.location.reload();
      }

    return(
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-success py-3 flex-column flex-md-row">
                <Link to={"/produtos"} className="navbar-brand">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo"></img>
                    GCP E-commerce
                </Link>
                <div className="navbar-nav-scroll">
                    <ul className="navbar-nav bd-navbar-nav flex-row">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/produtos"} className="nav-link">
                                Gerenciar Produtos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/adicionar_produto"} className="nav-link">
                                Adicionar Produto
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/usuarios/${usuario.id}`} className="nav-link">
                                Editar Perfil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div
                                onClick={sair}
                                className="nav-link" style={{cursor: "pointer"}}>
                                    Sair
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <main className="container">
                <Produtos/>
            </main>
            <Footer/>
        </div>
    );
}
