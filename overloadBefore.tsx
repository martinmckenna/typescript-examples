import React from 'react'

const doThing = (arg?: any) => {

  if (typeof arg === 'string') {
    return 'hello world'
  }

  if (typeof arg === 'number') {
    return 1;
  }

  if (!arg) {
    return () => null
  }

  return arg;
};

export const something = doThing([1, 2])

let Markdown: JSX.Element;

if (typeof something === 'string') {
  Markdown = <div>{something.length}</div>
}