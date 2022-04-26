import AdminNavBar from "./AdminNavBar";
import '@testing-library/jest-dom'
import {createMemoryHistory} from 'history'
import{render,screen,fireEvent} from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import App from "../../../App";
import userEvent from "@testing-library/user-event";
import AdminPage from "../AdminPage";




import { MemoryRouter} from 'react-router'

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return { 
  ...render (
  <Router history={history}>
      {component}
  </Router>
  )
}
}

it('should render the home page', () => {

const { container, getByTestId } = render(<App />) 
const navbar = getByTestId('navbar')
const link = getByTestId('home-link')

expect(container.innerHTML).toMatch('Start Date')
expect(navbar).toContainElement(link)
})
it('should navigate to the about page', ()=> {
  const { container, getByTestId } = render(<App />) 

  fireEvent.click(getByTestId('home'))

  expect(container.innerHTML).toMatch('Start Date')
})



