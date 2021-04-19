import React from 'react';
import Categories from '../components/categories/index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const categoriesMock = [
  { id: '94', title: 'Cervejas', __typename: 'Category' },
  { id: '95', title: 'Destilados', __typename: 'Category' },
  { id: '92', title: 'Vinhos', __typename: 'Category' },
];
describe('Categories', () => {
  it('should render all buttons correctly', () => {
    const handleClick = jest.fn();
    render(<Categories list={categoriesMock} handleClick={handleClick} />);
    expect(screen.getAllByRole('button').length).toBe(3);
  });

  it('should call function if clicked', () => {
    const handleClick = jest.fn();
    render(<Categories handleClick={handleClick} list={categoriesMock} />);
    const button = screen.getByRole('button', { name: 'Cervejas' });
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
