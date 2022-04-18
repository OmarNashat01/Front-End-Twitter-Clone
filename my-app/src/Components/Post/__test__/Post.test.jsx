import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Post from "../Post";


it('check username', () => {
    render(
        <Post  
            key={"dani"}
            displayName={"daniel"}
            username={"dani99"}
            verified={"1"}
            text={"This is my first post Hi everybody"}
            avatar={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            image={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            isLiked = {"false"}
            isRetweet = {"false"}
            likes = {22}
            retweets = {20}>
              </Post>
    );
    const divElement = screen.getByText(/dani99/i);
    expect(divElement).toBeInTheDocument();
   
});

it('check likes', () => {
    render(
        <Post  
            key={"dani"}
            displayName={"daniel"}
            username={"dani99"}
            verified={"1"}
            text={"This is my first post Hi everybody"}
            avatar={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            image={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            isLiked = {"false"}
            isRetweet = {"false"}
            likes = {22}
            retweets = {20}>
              </Post>
    );
    const divElement = screen.getByText(/22/i);
    expect(divElement).toBeInTheDocument();
   
});


it('check retweets', () => {
    render(
        <Post  
            key={"dani"}
            displayName={"daniel"}
            username={"dani99"}
            verified={"1"}
            text={"This is my first post Hi everybody"}
            avatar={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            image={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            isLiked = {"false"}
            isRetweet = {"false"}
            likes = {22}
            retweets = {20}>
              </Post>
    );
    const divElement = screen.getByText(/20/i);
    expect(divElement).toBeInTheDocument();
   
});

it('likes increasing', () => {
    render(
        <Post  
            key={"dani"}
            displayName={"daniel"}
            username={"dani99"}
            verified={"1"}
            text={"This is my first post Hi everybody"}
            avatar={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            image={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            isLiked = {"false"}
            isRetweet = {"false"}
            likes = {22}
            retweets = {20}>
              </Post>
    );
    const divElement1 = screen.getByText(/22/i);
    fireEvent.click(divElement1);
    const divElement2 = screen.getByText(/23/i);
    expect(divElement2).toBeInTheDocument();
});

it('likes decreasing', () => {
    render(
        <Post  
            key={"dani"}
            displayName={"daniel"}
            username={"dani99"}
            verified={"1"}
            text={"This is my first post Hi everybody"}
            avatar={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            image={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            isLiked = {"false"}
            isRetweet = {"false"}
            likes = {22}
            retweets = {20}>
              </Post>
    );
    const divElement1 = screen.getByText(/22/i);
    fireEvent.click(divElement1);
    const divElement2 = screen.getByText(/23/i);
    expect(divElement2).toBeInTheDocument();
    fireEvent.click(divElement2);
    const divElement3 = screen.getByText(/22/i);
    expect(divElement3).toBeInTheDocument();


});

it('retweets increasing', () => {
    render(
        <Post  
            key={"dani"}
            displayName={"daniel"}
            username={"dani99"}
            verified={"1"}
            text={"This is my first post Hi everybody"}
            avatar={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            image={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            isLiked = {"false"}
            isRetweet = {"false"}
            likes = {22}
            retweets = {20}>
              </Post>
    );
    const divElement1 = screen.getByText(/20/i);
    fireEvent.click(divElement1);
    const divElement2 = screen.getByText(/retweet/i);
    fireEvent.click(divElement2);
    const divElement3 = screen.getByText(/21/i);
    expect(divElement3).toBeInTheDocument();


});


it('retweets decreasing', () => {
    render(
        <Post  
            key={"dani"}
            displayName={"daniel"}
            username={"dani99"}
            verified={"1"}
            text={"This is my first post Hi everybody"}
            avatar={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            image={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            isLiked = {"false"}
            isRetweet = {"false"}
            likes = {22}
            retweets = {20}>
              </Post>
    );
    const divElement1 = screen.getByText(/20/i);
    fireEvent.click(divElement1);
    const divElement2 = screen.getByText(/retweet/i);
    fireEvent.click(divElement2);
    const divElement3 = screen.getByText(/21/i);
    fireEvent.click(divElement3);
    const divElement4 = screen.getByText(/undo/i);
    fireEvent.click(divElement4);

    const divElement5 = screen.getByText(/20/i);
    expect(divElement5).toBeInTheDocument();



});


it('likes red effect', () => {
    render(
        <Post  
            key={"dani"}
            displayName={"daniel"}
            username={"dani99"}
            verified={"1"}
            text={"This is my first post Hi everybody"}
            avatar={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            image={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            isLiked = {"false"}
            isRetweet = {"false"}
            likes = {22}
            retweets = {20}>
              </Post>
    );
    const divElement1 = screen.getByText(/22/i);
    fireEvent.click(divElement1);
    const divElement2 = screen.getByText(/23/i);
    expect(divElement2).toHaveClass("likeCounter");
});
