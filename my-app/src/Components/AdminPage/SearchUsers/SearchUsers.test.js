import { internal_resolveProps } from '@mui/utils'
import '@testing-library/jest-dom'
import{render,screen,fireEvent} from '@testing-library/react'
import SearchUsers from './SearchUsers'
const mockedTest=jest.fn()
describe ("AddInput", ()=>{
test('should render input element',async()=>{
    render(
        <SearchUsers 
        username={''}
        setUser={mockedTest}  
        />
    );
const inputElement=screen.getByPlaceholderText(/Search Users/i)
expect(inputElement).toBeInTheDocument();

});
// test('should be able to type in search box',async()=>{
//     render(
//     <SearchUsers
//      username={''}
//      setUser={mockedTest} 
//     />
//     );
//     const inputElement=screen.getByPlaceholderText(/Search Users/i);
//     fireEvent.change(inputElement,{target:{value:"a1hamed"}})
//     expect(inputElement).toBe("a1hamed");
    
//     });

})