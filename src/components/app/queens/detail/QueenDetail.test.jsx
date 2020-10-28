import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import QueenDetail from './QueenDetail';
import { getQueenById } from '../../../../services/rupaulApi';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../../../services/rupaulApi.js');

describe('QueenDetail component', () => {
  it('renders the QueenDetail component after a load', () => {
    getQueenById.mockResolvedValue({
      id: 89,
      name: 'Trixie Mattel',
      imageUrl: 'trixie.jpg',
      quote: 'Okay, calm down there public school.'
    });
    render(<MemoryRouter initialEntries={['/queen/89']}>
      <Route path="/queen/:id" component={QueenDetail}/>
    </MemoryRouter>);

    screen.getByText('Loading...');

    return waitFor(() => {
      screen.getByText('Trixie Mattel');
      screen.getByAltText('Trixie Mattel');
      screen.getByText('Okay, calm down there public school.');
    });
  });
});
