import React from 'react';
import { ActivityIndicator } from 'react-native'; //Adiciona um loading no button
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

const Button = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
          <Text>{children}</Text>
        )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
}

Button.defaultProps = {
  loading: false, //Não é obrgatória
}

export default Button;