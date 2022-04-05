import {render, screen , cleanup,fireEvent } from '@testing-library/react';
import { createEvent } from "@testing-library/dom"
import TestRenderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import TweetBox from '../TweetBox';


function createPasteEvent(html) {
    const text = html.replace('<[^>]*>', '');
    return {
      clipboardData: {
        types: ['text/plain', 'text/html'],
        getData: (type) => (type === 'text/plain' ? text : html),
      },
    };
}

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


 test('If Text is entered the Submit button is enabled',() => {
    // render(<TweetBox/>);
    // const tweetinputElement = screen.getByTestId('tweetinput-1');
    // userEvent.type(tweetinputElement, "test@mail.com");
    // const submitElement = screen.getByRole('button',{name: /Tweet/i});
    // expect(tweetinputElement).toBeInTheDocument;
    // expect(tweetinputElement).toHaveAttribute("type", "hidden");
    // expect(submitElement).toBeDisabled();
    // screen.getByRole('');
    
    // const editorNode = render(<TweetBox/>).querySelector(".public-DraftEditor-content");
    // const eventProperties = createPasteEvent(textToPaste);
    // const pasteEvent = createEvent.paste(editorNode, eventProperties);
    // pasteEvent.clipboardData = eventProperties.clipboardData;
    // fireEvent(editorNode, pasteEvent);
    // screen.getByRole('');

 });