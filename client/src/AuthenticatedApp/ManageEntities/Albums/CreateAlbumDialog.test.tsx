import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateAlbumDialog from './CreateAlbumDialog';

beforeEach(() => render(<CreateAlbumDialog open handleClose={() => null} />));

test('everyInputIsFilled', () => {
  userEvent.type(screen.getByTestId('name'), 'bla');
  userEvent.type(screen.getByTestId('description'), 'bla');
  userEvent.type(screen.getByTestId('country'), 'bla');
  userEvent.type(screen.getByTestId('type'), 'bla');
  userEvent.type(screen.getByTestId('listeners'), 'bla');

  userEvent.click(screen.getByText('שמירה'));
  expect(screen.queryByText('שדה חובה')).toBeNull();
});

test('oneInputMissed', () => {
  userEvent.type(screen.getByTestId('name'), 'bla');
  userEvent.type(screen.getByTestId('description'), 'bla');
  userEvent.type(screen.getByTestId('country'), '');
  userEvent.type(screen.getByTestId('type'), 'bla');
  userEvent.type(screen.getByTestId('listeners'), 'bla');

  userEvent.click(screen.getByText('שמירה'));
  screen.getByText('שדה חובה');
});