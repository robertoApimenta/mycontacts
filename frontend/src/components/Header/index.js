import { Container, InputSearchContainer } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>My Contacts</h1>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar" />
      </InputSearchContainer>
    </Container>
  );
}
