/*************************************************************************************************
Course Title: React Front to back 2022
Author: Traversy Media
Description: Project 2, Github finder app. Helps us practice implementing 3rd party API and reducers
*************************************************************************************************/

// install tailwind css with create react app instructions found at https://tailwindcss.com/docs/guides/create-react-app
// installed daisy UI instructions found at https://daisyui.com/docs/install/
// daisyUI is the most popular tailwind css component library

//****************************** */
//   environment variables
//****************************** */
// add .env file to root of project
//include variables with format of: REACT_APP_VARIABLE_NAME
REACT_APP_GITHUB_TOKEN = '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'
// call anywhere in project via:
process.env.REACT_APP_GITHUB_TOKEN

//****************************** */
//   reducers
//****************************** */
// functions that we can use to manipulate our state
// use instead of useState hook when you have more state to scale application
// contextapi with useState hook and reducers is usually good enough to manage state, however if you have extremely large application with a lot of state then you can use Redux, which uses Reducers
// https://www.robinwieruch.de/javascript-reducer/ has great documentation on reducers

//****************************** */
//  refactoring with reducers, context
//****************************** */
// moved functions from context to action file, and only passing state and dispatch from context provider.
// calling functions from action file via component, and dispatching via component as well
