import React from 'react';
import Nav from '../../components/nav.component';
import Footer from '../../components/footer.component';
import AddUsuario from '../../components/add-usuario.component';
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdicionarUsuario() {
    return(
        <div className="container-fluid login-container">
            <AddUsuario/>
            <Footer/>
        </div>
    );
}
