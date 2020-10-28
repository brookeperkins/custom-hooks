import React from 'react';
import PropTypes from 'prop-types';

const QueenItem = ({ name, imageUrl }) => (
  <figure>
    <img src={imageUrl} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);

QueenItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};

export default QueenItem;
