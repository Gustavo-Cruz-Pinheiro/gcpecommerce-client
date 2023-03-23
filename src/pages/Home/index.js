import React from 'react';
import Nav from '../../components/nav.component';
import Footer from '../../components/footer.component';
import Produtos from '../../components/produtos.component';
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
    return(
        <div>
            <Nav/>
            <main className="container">
                <Produtos/>
            </main>
            <Footer/>
        </div>
    );
}