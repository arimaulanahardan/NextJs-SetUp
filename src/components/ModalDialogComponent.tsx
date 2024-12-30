// Modal dialogs are interactive overlay windows that temporarily disable the main
// content of a web page, focusing user attention on specific tasks or information.
// They serve various purposes, including displaying critical alerts, requesting user
// input, confirming actions, and presenting additional content without navigating
// away from the current context.
// 2. Build a reusable modal dialog component that can be opened and closed with
// customizable title and contents.
// 3. The modal dialog should contain the following elements:
// a. Title/heading string.
// b. Any contents as the body.
// c. Close button that hides/closes the modal when clicked.
// 4. The modal dialog is centered horizontally and vertically on the screen.
// 5. The modal dialog is displayed above a semi-transparent background overlay.
// 6. The focus of the exercise is on the functionality and not the styling.

import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { IModal } from "@/interfaces/modalInterface";

const dataModal: IModal = {
  id: 1,
  title: "Halooo...",
  content: "Ini Adalah Modal",
};

const ModalDialogComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>No. 4 Modal Dialog</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-lg">Click the button to open the modal</div>

        <Button onClick={toggleModal}>Open Modal</Button>
        {isOpen && (
          <div className="fixed inset-0 z-[50] flex items-center justify-center">
            <Card className="w-1/2 z-10">
              <CardHeader>
                <CardTitle>{dataModal.title}</CardTitle>
              </CardHeader>
              <CardContent>{dataModal.content}</CardContent>
              <CardFooter>
                <Button onClick={toggleModal}>Close</Button>
              </CardFooter>
            </Card>
            <div
              className="fixed inset-0 bg-black/50"
              onClick={toggleModal}
            ></div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ModalDialogComponent;
