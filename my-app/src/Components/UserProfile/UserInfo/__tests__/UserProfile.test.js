import { render, screen, fireEvent } from "@testing-library/react";
import UserProfile from "../../UserProfile";
import Popup from "../../UserInfo/Popup";
import Bio from "../../UserInfo/Bio";

test("should show the bio info ", async () => {
  render(<Bio> hi iam the bio </Bio>);
  const bioElement = screen.getByRole("paragraph", { name: /hi iam the bio/i });
  expect(bioElement).toBeInTheDocument();
});

test("should the edit button pop out an edit profile memo", () => {
  render(
    <Popup trigger={true}>
      <h3> Edit Profile </h3>{" "}
    </Popup>
  );
  const buttonElement = screen.getByRole("button", { name: /Edit Profile/i });
  const popupElement = screen.getByLabelText(/Edit Profile/i);
  fireEvent.click(buttonElement);
  expect(popupElement).toBeInTheDocument();
});
