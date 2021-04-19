import React from 'react';
import Button from '../components/button/index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('should render button correctly', () => {
    const onClick = jest.fn();
    render(<Button handleClick={onClick}>test button</Button>);
    const button = screen.getByText('test button');
    userEvent.click(button);

    expect(onClick).toBeCalled();
  });
});
