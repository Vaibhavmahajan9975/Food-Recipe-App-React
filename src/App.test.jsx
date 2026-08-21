import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { vi } from 'vitest';
import App from './App.jsx';

vi.mock('axios');

const recipeResponse = {
  data: {
    hits: [
      {
        recipe: {
          uri: 'recipe_1',
          label: 'Chicken Curry',
          image: 'https://example.com/chicken-curry.jpg',
          ingredientLines: ['Chicken', 'Salt']
        }
      }
    ]
  }
};

beforeEach(() => {
  axios.get.mockResolvedValue(recipeResponse);
});

afterEach(() => {
  vi.clearAllMocks();
  window.history.pushState({}, '', '/');
});

test('renders the home page and shows recipes from the API', async () => {
  render(<App />);

  expect(screen.getByText(/food recipe app xyz/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('Chicken Curry')).toBeInTheDocument();
  });

  expect(axios.get).toHaveBeenCalledTimes(1);
});

test('search button loads recipes for the typed query', async () => {
  render(<App />);

  const input = screen.getByLabelText(/search recipe/i);
  fireEvent.change(input, { target: { value: 'pasta' } });
  fireEvent.click(screen.getByRole('button', { name: /search recipes/i }));

  await waitFor(() => {
    expect(axios.get).toHaveBeenLastCalledWith(
      expect.stringContaining('q=pasta')
    );
  });
});

test('renders the about page route', async () => {
  window.history.pushState({}, '', '/about');

  render(<App />);

  await waitFor(() => {
    expect(axios.get).toHaveBeenCalled();
  });

  expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  expect(screen.getByText(/moving toward it/i)).toBeInTheDocument();
});
