import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Header from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Conteudo from "../../components/conteudocard/conteudocard";

export default class Home extends Component {

    render() {
        return (
            <article className="corpo">
                <Header />
                <section className="conteudo">
                    <Conteudo />
                </section>
                <Footer />
            </article>
        )
    }
}