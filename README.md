# Example project

This project is a little tutorial for ReactJS.

## Table of contents

1. [Usefull ressources](#usefull-ressources)
2. [Usage](#usage)
3. [Best practices](#best-practices)
   1. [Component declaration](#component-declaration)
   2. [Function declaration](#function-declaration)
4. [Start tutorial](#start-tutorial)
5. [First button](#first-button)
6. [Hook](#hook)
7. [Second component](#second-component)
8. [Second component](#second-component)
   1. [Display component](#display-component)
9. [Webapp organization](#webapp-organization)

## Usefull ressources

The ReactJS bible : `https://mui.com/`

If you want to declare a component, search in google : `react-mui button` and go to this site, you will have a large documentation with many examples:

**_Ex :_**
`https://mui.com/material-ui/react-button/`

## Prerequisites

- First install node on your computer

**_Ressources :_**

`https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac`

- Clone this repo
- Then install npm dependencies :

```bash
npm i
```

## Best practices

### Component declaration

A component is part of our webapp. It's composed by some objects (buttons, text, ...).

We declare our components as constants, it's a state of the art good practice. It makes the code more readable.

We declare all states and functions outside the return.
The render part is declared in the return part.

```javascript
const SimpleButton = () => {
  return <Button>Click here</Button>;
};
```

We need to export our component at the end of our file :

```javascript
export default SimpleButton;
```

### Function declaration

We declare our function as constants to :

```javascript
const uselessFunction = () => {
  return "I'm useless...";
};
```

## Start tutorial

- Open this project with your favorite IDE and go to `./src/components/App.js`

During this tutorial, you juste need to change a single value :

```javascript
const App = () => {
  return <StateAlignExample />; <------- this value
};
```

- Run the webapp :

```bash
npm start
```

Now your webapp is running at `http://localhost:8000`.

## First button

Replace `StateAlignExample` by `SimpleButton`.
Go to `http://localhost:8000`and see your first component display !!!

This button don't do anything at the moment.

## Hook

Hooks are JavaScript functions that manage the state's behaviour and side effects by isolating them from a component.

## Second component

In this step, we want to build a button that increase a value.

First, we initialize a state for our value :

```javascript
const [number, setNumber] = useState(0);
```

Our value is named `number`and we associate a function `setNumber` that update it's value. We initialize is value at 0.

**_Ex :_**

```javascript
setNumber(12) ----> result : number = 12
```

We add an `IconButton` with a bin icon for number value reset.

### Display component

Replace `SimpleButton` by `StateChange`.
Go to `http://localhost:8000`and see your first component display !!!

## Webapp organization

If we want to organize our components, we need to use `Stack`.

**_Ressources :_**
`https://mui.com/material-ui/react-stack/`

With `Stack` we can organize our webapp as we want.
We can write `Stack` inside `Stack` if we want a more complexe component structure.

### Display organize component

Replace `StateChange` by `StateChangeAlign`.
Go to `http://localhost:8000`and see your first component display !!!
