import React from 'react';
import Nav from '../../components/nav.component';
import Footer from '../../components/footer.component';
import AddProduto from '../../components/add-produto.component';
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdicionarProduto() {
    return(
        <div>
            <Nav/>
            <main className="container">
                <AddProduto/>
            </main>
            <Footer/>
        </div>
    );
}