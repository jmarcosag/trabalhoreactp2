import React, { useState } from 'react';
import { Component } from 'react';
import ConteudoCard from '../conteudocard/conteudocard';
import "./conteudos.css";

export default class Conteudo extends Component { 

    constructor(props) {
        super(props);
        this.state = {conteudoLista: []};
    }

    onFalhaCarregamentoConteudos(erro) {
        console.log(erro);
    }

    componentDidMount() {
        fetch("http://localhost:8080/conteudo")
        .then(response => response.json(), this.onFalhaCarregamentoConteudos)
        .then(json => this.setState({ conteudoLista: json }), this.onFalhaCarregamentoConteudos);
    }

    render() {
        return (
            <section id="conteudos">
                {
                    this.state.conteudoLista.map(
                        function (conteudo) {
                            return <ConteudoCard conteudo={conteudo} />
                        },
                        this
                    )
                }
            </section>
        )
    }
}

