import { Link } from 'react-router-dom';

import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/arrow.png';
import edit from '../../assets/images/edit.png';
import trash from '../../assets/images/trash.png';

export default function Home() {
  return (

    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar" />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Olow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Roberto Pimenta</strong>
              <small>instagram</small>
            </div>
            <span>roberto@email.com</span>
            <span>(99) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123"><img src={edit} alt="editar" /></Link>
            <button type="button"><img src={trash} alt="delete" /></button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
