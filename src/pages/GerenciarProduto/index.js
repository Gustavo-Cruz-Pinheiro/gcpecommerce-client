import React from 'react';
import Nav from '../../components/nav.component';
import Footer from '../../components/footer.component';
import Produto from '../../components/produto.component';
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function GerenciarProduto() {
    return(
        <div>
            <Nav/>
            <main className="container">
                <Produto/>
            </main>
            <Footer/>
        </div>
    );
}