import React from 'react';
import { render, cleanup } from '@testing-library/react';
import QueenItem from './QueenItem';

describe('QueenItem component', () => {
  afterEach(() => cleanup());
  it('renders the QueenItem component', () => {
    const { asFragment } = render(<QueenItem
      name="Trixie Mattel"
      imageUrl="trixie.jpg" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
