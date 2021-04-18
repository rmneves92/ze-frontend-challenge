// import React from 'react';
// import Home from '../pages/home';
// import {
//   render,
//   screen,
//   waitFor,
//   wait,
//   fireEvent,
// } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import userEvent from '@testing-library/user-event';
// import '../components/locationSearchInput';
// import { MockedProvider } from '@apollo/react-testing';
// import { DistributorMock, SetupGoogleMock } from '../__mocks__/mocks';
// import App from '../App';

// const DOWN_ARROW = { keyCode: 40 };

// describe('Testing Home Page', () => {
//   beforeAll(() => {
//     SetupGoogleMock();
//   });

//   it('should renders correctly', async () => {
//     render(<Home />);

//     // const autocomplete = screen.getByTestId('autocomplete');
//     // const options = screen.getByTestId('options');
//     // autocomplete.focus();

//     // userEvent.type(autocomplete, 'Rua');
//     // await waitFor(() =>
//     //   expect(screen.getByTestId('suggestion')).toBeInTheDocument()
//     // );

//     // fireEvent.keyDown(autocomplete, { key: 'ArrowDown' });

//     // await waitFor();

//     // fireEvent.keyDown(autocomplete, { key: 'Enter' });
//     // await waitFor();

//     // expect(input.value).toEqual(
//     //   'Rua Américo Brasiliense - Chácara Santo Antônio (Zona Sul), São Paulo - SP, Brasil'
//     // );

//     // fireEvent.keyDown(getByLabelText(selectLabel), DOWN_ARROW);

//     // const { getByTestId } = render(
//     //   <MockedProvider mocks={DistributorMock} addTypename={false}>
//     //     <Home />
//     //   </MockedProvider>
//     // );

//     // await waitFor(() =>
//     //   expect(screen.queryByTestId('input')).toBeInTheDocument()
//     // );
//   });
// });

import React from 'react';
import {
  getByRole,
  getByTestId,
  render,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { MockedProvider } from '@apollo/react-testing';
import HomePage from '../pages/home';
import { DistributorMock, SetupGoogleMock } from '../__mocks__/mocks';

describe('Home Page', () => {
  beforeAll(() => {
    SetupGoogleMock();
  });

  // it('should get distributor', async () => {
  //   const { getAllByTestId, debug } = render(
  //     <MockedProvider mocks={DistributorMock} addTypename={false}>
  //       <HomePage />
  //     </MockedProvider>
  //   );

  //   // const pocId = CategoryMock[0].result.data.allCategory.length;
  //   await new Promise((resolve) => setTimeout(resolve, 0));

  //   // const buttonElement = getAllByTestId('button');
  //   // await waitFor(() => expect(buttonElement.length).toBe(categoriesLength));
  // });
  it('should be able to select address in the autocomplete field', async () => {
    const { getAllByTestId, getByTestId, getByRole, getByText, debug } = render(
      <HomePage />
    );
    const inputElement = getByTestId('autocomplete');

    userEvent.type(inputElement, 'Rua Américo Brasiliense, São Paulo');
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('___________________ debug ______________________');
    debug();

    await waitFor(() =>
      expect(getAllByTestId('suggestion')).toBeInTheDocument()
    );
  });
});
