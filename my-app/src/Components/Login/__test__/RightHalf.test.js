import { render , screen } from "@testing-library/react";
import RightHalf from '../rightHalf';
import '@testing-library/jest-dom'

it('used for trial testing',async()=>{
    render(<RightHalf />);
    const rightHalfElement = screen.getByText(/By signing up/i);
    expect(rightHalfElement).toBeInTheDocument();
})
it('it should render the main headding',async()=>{
    render(<RightHalf />);
    const rightHalfElement = screen.getByRole("heading",{name:"Happening now"});
    expect(rightHalfElement).toBeInTheDocument();
})
it('it should render second headding',async()=>{
    render(<RightHalf />);
    const rightHalfElement = screen.getByText(/Join Twitter today/i);
    expect(rightHalfElement).toBeInTheDocument();
})
it('it should render button to sign up as with google',async()=>{
    render(<RightHalf />);
    const rightHalfElement = screen.getByRole("button",{name:"google img Sign up with Google"});
    expect(rightHalfElement).toBeInTheDocument();
})
it('it should render button to sign up as with apple',async()=>{
    render(<RightHalf />);
    const rightHalfElement = screen.getByRole("button",{name:"mac icon Sign up with Apple"});
    expect(rightHalfElement).toBeInTheDocument();
})
it('it should render button to sign up with phone or email',async()=>{
    render(<RightHalf />);
    const rightHalfElement = screen.getByRole("button",{name:"Sign up with phone or email"});
    expect(rightHalfElement).toBeInTheDocument();
})
it('it should render button to sign in',async()=>{
    render(<RightHalf />);
    const rightHalfElement = screen.getByRole("button",{name:"Sign in"});
    expect(rightHalfElement).toBeInTheDocument();
})
//render the images used inside buttons as design
it('it should render google img inside button',async()=>{
    render(<RightHalf />);
    const rightHalfElement = screen.getByRole("img",{name:"google img"});
    expect(rightHalfElement).toBeInTheDocument();
})
it('it should render mac img inside button',async()=>{
    render(<RightHalf />);
    const rightHalfElement = screen.getByRole("img",{name:"mac icon"});
    expect(rightHalfElement).toBeInTheDocument();
})