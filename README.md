# IU Exercise (React)

This project is to demonstrate a real-world example of a task that could be assigned. You will need to follow the requirements and use your skills to complete the requirements.

## Getting started

You will need knowledge of HTML, CSS/SCSS, TypeScript and React for this exercise.

1. Clone this repo
2. Ensure you are running the latest LTS version of Node
3. Run `npm install` to install dependencies
4. Run `npm run dev` to run the React application at http://localhost:3000
5. Familiarize yourself with the code and structure.

## Requirements

We are creating a log in form and the components available are missing some features necessary to complete the form.

### Input

Currently the `Input` component only supports `type="text"`. We need to enhance the component to be able to support other input types such as password. In addition, there is no clear indication that the input field has focus. We'd like the input component to have a focus style when the element is focused. We'd also like to be able to read the value of the input when a user makes changes to the input.

#### Acceptance Criteria (Input)
- Input component must support an additional "password" type for the `type` prop.
- Input component must have a focused style:
    - When input is focused border should be `skyblue`
- Input should have a `onChange` prop that emits the value of the input on change.

### Button

Currently there is only one "primary" style to the `Button` component. We'd like to enhance the button to include a new "secondary" variant for the "Sign Up" button. We'd like this variant to have a light background color (`#ffffffde`) with the text color our blue color (`#1182e5`) and a hover background of our light blue color (`#a3c6e4`).

#### Acceptance Criteria (Button)
- Button must support a new "secondary" variant for the `variant` prop.
- Button must have the following "secondary" styling:
    - Background color should be `#ffffffde`
    - Text of the button should be `#1182e5`
    - Hovered background color should be `#a3c6e4`

Thank you for participating in this exercise. We are looking forward in reviewing the work you've submitted as part of our interview process.