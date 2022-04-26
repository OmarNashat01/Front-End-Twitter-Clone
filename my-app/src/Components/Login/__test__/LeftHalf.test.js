import { render , screen } from "@testing-library/react";
import LeftHalf from '../LeftHalf';
import '@testing-library/jest-dom'

it('it should render the img in the left half',async()=>{
    render(<LeftHalf />);
    const rightHalfElement = screen.getByRole("img");
    expect(rightHalfElement).toBeInTheDocument();
})