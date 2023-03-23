import React from 'react';
import Nav from '../../components/nav.component';
import Footer from '../../components/footer.component';
import ProdutosList from '../../components/produtos-list.component';
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ListaProdutos() {
    return(
        <div>
            <Nav/>
            <main className="container">
                <ProdutosList/>
            </main>
            <Footer/>
        </div>
    );
}