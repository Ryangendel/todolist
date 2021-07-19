import React from 'react'
import { getQueriesForElement,fireEvent, getByText } from '@testing-library/react';
import * as ReactDom from 'react-dom'
import App from './App';

function render(component){
  const root = document.createElement("div")
  ReactDom.render(component, root)
  return getQueriesForElement(root)
}

test('ToDo', () => {

  // const root = document.createElement("div")
  // ReactDom.render(<App/>, root)
  const {getByText, getByLabelText} = render(<App/>)
  //after rendering our componet
  //use dom apis(query selectior ) to make assertions
  expect(root.querySelector('h1').textContent).toBe("TODO")
  expect(getByText("TODO")).not.toBeNull()
  // expect(root.querySelector("label").textContent).toBe("Add todo: ")
  expect(getByLabelText("Add todo:")).not.toBeNull()
  // expect(root.querySelector("button").textContent).toBe("Add #1")
  expect(getByText("Add #1")).not.toBeNull()
});

test('Add items to list', () => {

  getByText('TODO')
  const input = getByLabelText('Add todo:')
  fireEvent.change(input, {target:{value:"wash car"}})
  fireEvent.click(getByText("Add #1"))

  getByText('wash car')
});
