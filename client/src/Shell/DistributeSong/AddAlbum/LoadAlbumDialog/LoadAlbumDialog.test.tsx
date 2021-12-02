import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {
  render, waitFor, screen
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import LoadAlbumDialog from '.';

const server = setupServer(
  rest.get('/api/albums', (req, res, ctx) => res(ctx.json(
    [
      {
        id: 1,
        name: 'A',
        description: 'GG',
      },
      {
        id: 2,
        name: 'B',
        description: 'FF',
      },
      {
        id: 3,
        name: 'C',
        description: 'EE',
      }
    ]
  ))),
);

beforeAll(() => server.listen());
beforeEach(() => render(<LoadAlbumDialog open handleClose={() => null} />));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays albums', async () => {
  await waitFor(() => screen.getByText('A'));

  expect(screen.getByText('A')).toBeInTheDocument();
  expect(screen.getByText('B')).toBeInTheDocument();
  expect(screen.getByText('C')).toBeInTheDocument();
});

test('filter albums', async () => {
  await waitFor(() => screen.getByText('A'));

  userEvent.type(screen.getByRole('textbox'), 'B');

  expect(screen.getByText('B')).toBeInTheDocument();
  expect(screen.queryByText('A')).toBeNull();
});

test('sort albums', async () => {
  await waitFor(() => screen.getByText('A'));

  userEvent.click(screen.getByRole('button', { name: 'מיין לפי' }));
  userEvent.click(screen.getByRole('option', { name: 'תיאור' }));

  const albums = screen.getAllByTestId('album');

  expect(albums.length).toBe(3);
  expect(albums[0]).toHaveTextContent('C');
  expect(albums[1]).toHaveTextContent('B');
  expect(albums[2]).toHaveTextContent('A');
});