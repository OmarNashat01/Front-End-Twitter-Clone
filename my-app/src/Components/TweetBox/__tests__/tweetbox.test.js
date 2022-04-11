import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { createEvent } from "@testing-library/dom";
// import TestRenderer from "react-test-renderer";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import TweetBox from "../TweetBox";

afterEach(() => {
  cleanup();
});

test("should render tweetbox component with DEFAULT image prop", () => {
  render(<TweetBox />);
  const tweetboxElement = screen.getByTestId("tweetbox-1");
  expect(tweetboxElement).toBeInTheDocument;
});

test("should render tweetbox component with PASSED  image prop", () => {
  render(<TweetBox avatar="https://www.w3schools.com/howto/img_avatar.png" />);
  const imageElement = screen.getByAltText("UserImage");
  expect(imageElement).toHaveAttribute(
    "src",
    "https://www.w3schools.com/howto/img_avatar.png"
  );
});

test("on initial render, Submit button is disabled", () => {
  render(<TweetBox />);
  const submitElement = screen.getByRole("button", { name: /Tweet/i });
  expect(submitElement).toBeDisabled();
});

test("should be able to type into input", () => {
  render(<TweetBox />);
  const textarea = screen.getByRole("textbox");
  const event = createEvent.paste(textarea, {
    clipboardData: {
      types: ["text/plain"],
      getData: () => "MyText",
    },
  });
  fireEvent(textarea, event);
  expect(screen.getByDisplayValue("MyText")).toBeInTheDocument();
});

test("If Text is entered the Submit button is enabled", async () => {
  render(<TweetBox />);
  const textarea = screen.getByRole("textbox");
  const event = createEvent.paste(textarea, {
    clipboardData: {
      types: ["text/plain"],
      getData: () => "MyText",
    },
  });
  fireEvent(textarea, event);
  const submitElement = screen.getByRole("button", { name: /Tweet/i });
  expect(submitElement).toBeEnabled();
});

test("On exceeeding 280 words ,Submit button is disabled", async () => {
  render(<TweetBox />);
  const textarea = screen.getByRole("textbox");
  const event = createEvent.paste(textarea, {
    clipboardData: {
      types: ["text/plain"],
      getData: () =>
        "MyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyText",
    },
  });
  fireEvent(textarea, event);
  const submitElement = screen.getByRole("button", { name: /Tweet/i });
  expect(submitElement).toBeDisabled();
});

test("On exceeding 280 word , Text is highlighted with red", async () => {
  const { container } = render(<TweetBox />);
  const textarea = screen.getByRole("textbox");
  const event = createEvent.paste(textarea, {
    clipboardData: {
      types: ["text/plain"],
      getData: () =>
        "MyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyText",
    },
  });
  fireEvent(textarea, event);
  // expect(container.firstChild.).toHaveClass('Editor__OverLimit');
  expect(container.getElementsByClassName("Editor__OverLimit").length).toBe(1);
});

test("On Entering URLs text is Highlighted", async () => {
  const { container } = render(<TweetBox />);
  const textarea = screen.getByRole("textbox");
  const event = createEvent.paste(textarea, {
    clipboardData: {
      types: ["text/plain"],
      getData: () => "www.twitter.com",
    },
  });
  fireEvent(textarea, event);
  expect(container.getElementsByClassName("Editor__Highlight").length).toBe(1);
});

test("On Entering Hashtags text is Highlighted", async () => {
  const { container } = render(<TweetBox />);
  const textarea = screen.getByRole("textbox");
  const event = createEvent.paste(textarea, {
    clipboardData: {
      types: ["text/plain"],
      getData: () => "#Selfies",
    },
  });
  fireEvent(textarea, event);
  expect(container.getElementsByClassName("Editor__Highlight").length).toBe(1);
});

const colors = { warning: "#ffad1f", error: "#e0245e", success: "#1da1f2" };

test("On Entering text below 260 out of 280 words Progress bar color is blue", async () => {
  const { container } = render(<TweetBox />);
  const textarea = screen.getByRole("textbox");
  const event = createEvent.paste(textarea, {
    clipboardData: {
      types: ["text/plain"],
      getData: () => "MyText",
    },
  });
  fireEvent(textarea, event);
  const progressbarColor = screen.getByTestId("circle-test");
  expect(progressbarColor).toHaveAttribute("stroke", colors.success);
});

test("On Entering text more than 260 and smaller than 280 words Progress bar color is yellow for warning", async () => {
  const { container } = render(<TweetBox />);
  const textarea = screen.getByRole("textbox");
  const event = createEvent.paste(textarea, {
    clipboardData: {
      types: ["text/plain"],
      getData: () =>
        "MyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyText",
    },
  });
  fireEvent(textarea, event);
  const progressbarColor = screen.getByTestId("circle-test");
  expect(progressbarColor).toHaveAttribute("stroke", colors.warning);
});

test("On Exceeding text more than 280 words Progress bar color is Red for error", async () => {
  const { container } = render(<TweetBox />);
  const textarea = screen.getByRole("textbox");
  const event = createEvent.paste(textarea, {
    clipboardData: {
      types: ["text/plain"],
      getData: () =>
        "MyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyText",
    },
  });
  fireEvent(textarea, event);
  const progressbarColor = screen.getByTestId("circle-test");
  expect(progressbarColor).toHaveAttribute("stroke", colors.error);
});

test("On Entering text more than 260 and smaller than 280 words ,Counter numbers appear and is YELLOW", async () => {
  const { container } = render(<TweetBox />);
  const textarea = screen.getByRole("textbox");
  const event = createEvent.paste(textarea, {
    clipboardData: {
      types: ["text/plain"],
      getData: () =>
        "MyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyText",
    },
  });
  fireEvent(textarea, event);
  const counter = screen.getByTestId("warningcounter-test");
  expect(counter).toHaveAttribute("fill", colors.wawrning);
});

test("On Exceeding text more 280 words ,Counter numbers are RED", async () => {
  const { container } = render(<TweetBox />);
  const textarea = screen.getByRole("textbox");
  const event = createEvent.paste(textarea, {
    clipboardData: {
      types: ["text/plain"],
      getData: () =>
        "MyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyTextMyText",
    },
  });
  fireEvent(textarea, event);
  const counter = screen.getByTestId("warningcounter-test");
  expect(counter).toHaveAttribute("fill", colors.error);
});
