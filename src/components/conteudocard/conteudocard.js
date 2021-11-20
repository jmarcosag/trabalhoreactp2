import 'bootstrap/dist/css/bootstrap.min.css';
import '../conteudocard/conteudocard.css';
import { Card, Button } from "react-bootstrap";
import { toLocale } from '../../utils/toLocale.js';


function ConteudoCard({conteudo}) {
  return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ height: '202.1px', width: '286px'}} src={conteudo.fotoUrl} />
        <Card.Body>
          <Card.Title>
            {conteudo.nome}
          </Card.Title>
          <Card.Text>
          <hr />
            {conteudo.descricao}
          <hr />
            {toLocale(conteudo.dataCadastro)}
          </Card.Text>
          <hr />
          <br/>
          <Button variant="info">Ver mais</Button>
        </Card.Body>
      </Card>
  )
}

export default ConteudoCard;
