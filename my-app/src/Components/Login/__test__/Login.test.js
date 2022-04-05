import { render , screen , fireEvent, getByLabelText, getByTestId } from "@testing-library/react";
import Login from '../login';
import SignIn from "../signIn"
import '@testing-library/jest-dom'

it('it should render signin popup',async()=>{
    render(<Login />);
    const rightHalfElement = screen.getByText("Join Twitter today.");
    // fireEvent.click(getByTestId("custom-element"))
    fireEvent.click(screen.getByText(/Sign in/i));
    expect(rightHalfElement).toBeInTheDocument();
})
it('it should render signup popup',async()=>{
    render(<Login />);
    const rightHalfElement = screen.getByText("Join Twitter today.");
    fireEvent.click(screen.getByText(/Sign up with phone or email/i));
    expect(rightHalfElement).toBeInTheDocument();
})