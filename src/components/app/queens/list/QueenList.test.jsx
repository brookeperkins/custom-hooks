import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import QueenList from './QueenList';
import { getQueens } from '../../../../services/rupaulApi';

jest.mock('../../../../services/rupaulApi.js');

describe('QueenList component', () => {
  it('renders the QueenList component after load', async() => {
    getQueens.mockResolvedValue([
      { id: 89, name: 'Trixie Mattel', image_url: 'trixie.png' }
    ]);
    render(<MemoryRouter>
      <QueenList />
    </MemoryRouter>);

    screen.getByText('Loading...');

    const queenList = await screen.findByTestId('queens');

    return waitFor(() => {
      expect(queenList).not.toBeEmptyDOMElement();
    });
  });
});
