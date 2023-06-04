# Accessible React Modal

This is a sample project showcasing an accessible modal dialog implemented in React using TypeScript.

## Project Overview

The project demonstrates creating a modal dialog that conforms to the ARIA Design Pattern for Modal Dialogs, as well as usage of React Hooks.

## Features

1. **Focus Trapping:** When the modal is open, focus is "trapped" within it, meaning that if a user presses Tab at the last focusable element, focus moves back to the first focusable element in the dialog.
2. **Click Outside to Close:** If a user clicks outside the modal, it will close.
3. **Return Focus After Close:** When the modal is closed, the focus returns to the element that triggered the modal.

## Setup

To get the project up and running, follow these steps:

1. Clone this repository:

   ```
   git clone https://github.com/thommccarthy/react-modal-ts.git
   ```

2. Navigate to the project directory:

   ```
   cd accessible-react-modal
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the project:

   ```
   npm start
   ```

Your application should now be running at `http://localhost:5713`.

## Technologies Used

- React
- TypeScript
- Vite
- CSS
