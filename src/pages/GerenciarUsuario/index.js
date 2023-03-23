import React from 'react';
import Nav from '../../components/nav.component';
import Footer from '../../components/footer.component';
import Usuario from '../../components/usuario.component';
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function GerenciarUsuario() {
    return(
        <div>
            <Nav/>
            <main className="container">
                <Usuario/>
            </main>
            <Footer/>
        </div>
    );
}