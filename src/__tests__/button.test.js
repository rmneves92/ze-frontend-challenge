import React from 'react';
import Button from '../components/button/index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('Tests for button component', () => {
  it('should render button correctly', () => {
    const onClick = jest.fn();
    render(<Button handleClick={onClick}>test button</Button>);
    const buttonElement = screen.getByText('test button');
    userEvent.click(buttonElement);

    expect(onClick).toBeCalled();
  });
});
