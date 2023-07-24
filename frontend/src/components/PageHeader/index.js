import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

import arrow from '../../assets/images/arrow.png';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
