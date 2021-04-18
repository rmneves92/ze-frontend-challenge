import React from 'react';
import Card from '../components/card';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('Card', () => {
  it('should card content correctly', () => {
    render(<Card>testing card</Card>);
    expect(screen.getByText('testing card')).toBeInTheDocument();
  });

  it('should apply color correctly', () => {
    const { container } = render(<Card color="yellow">testing card</Card>);
    expect(container.firstChild).toHaveStyle(`background-color: yellow`);
  });
});
