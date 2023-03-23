import React from 'react';
import Nav from '../../components/nav.component';
import Footer from '../../components/footer.component';
import UsuariosList from '../../components/usuarios-list.component';
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ListaUsuarios() {
    return(
        <div>
            <Nav/>
            <main className="container">
                <UsuariosList/>
            </main>
            <Footer/>
        </div>
    );
}