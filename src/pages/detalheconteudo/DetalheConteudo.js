import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './detalheconteudo.css';
import Header from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Card } from "react-bootstrap";

export default class DetalheConteudo extends Component {

    render() {
        return (
            <article className="corpo">
                <Header />
                <section className="conteudo">
                    <div class="flex-container">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.imgur.com/RrHv9Wl.jpg" />
                                <Card.Body>
                                    <Card.Title>Inside Job</Card.Title>
                                    <hr />
                                    <Card.Text>
                                        <div class="flex-container">
                                            <div class="flex-item btn-outline-secondary" background-color="cyan">Comédia</div>
                                            <div class="flex-item btn-outline-secondary" background-color="cyan">Comédia</div>
                                            <div class="flex-item btn-outline-secondary" background-color="cyan">Comédia</div>
                                            <div class="flex-item btn-outline-secondary" background-color="cyan">Comédia</div>
                                            <div class="flex-item btn-outline-secondary" background-color="cyan">Comédia</div>
                                            </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-lg-6">
                            <p>loremloremdaskjsajfhakjsfhaskjfghkajsghfdkjasghdkjlashjfkhaskjhdskjashfdkjhasdfjkasgfjkashdkjsahkjashfgkjasgfdkjasgkdjjaskd</p>
                        </div>
                    </div>    
                </section>
                <Footer />
            </article>
        )
    }
}