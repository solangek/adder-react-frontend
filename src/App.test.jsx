import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App.jsx';

describe('App', () => {
  it('renders the main page heading', () => {
    render(<App />);
    expect(screen.getByText(/A simple form submit for adding numbers/i)).toBeInTheDocument();
  });
});

