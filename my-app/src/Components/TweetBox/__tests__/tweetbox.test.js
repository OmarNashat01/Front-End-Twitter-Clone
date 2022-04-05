import {render, screen , cleanup,fireEvent } from '@testing-library/react';
import { createEvent } from "@testing-library/dom"
import TestRenderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import TweetBox from '../TweetBox';


  
afterEach(()=>{
    cleanup();
});

test('should render tweetbox component',() =>{
    render(<TweetBox/>);
    const tweetboxElement = screen.getByTestId('tweetbox-1');
    expect(tweetboxElement).toBeInTheDocument;
 })

 test('on initial render, Submit button is disabled', () =>{
    render(<TweetBox/>);
    const submitElement = screen.getByRole('button',{name: /Tweet/i});
    expect(submitElement).toBeDisabled();
 })


 test('If Text is entered the Submit button is enabled',async () => {
    render(<TweetBox />);
    const textarea = screen.getByRole('textbox');
    const event = createEvent.paste(textarea, {
    clipboardData: {
        types: ['text/plain'],
        getData: () => 'MyText',
    },
    });
    fireEvent(textarea, event);
    const submitElement = screen.getByRole('button',{name: /Tweet/i});
    expect(submitElement).toBeEnabled();

 });