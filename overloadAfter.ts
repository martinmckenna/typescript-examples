/**
 * our overload with 4 variants
 */
interface DoThing {
  (): Function;
  (arg: string): string
  (arg: number): number
  <Whatever>(arg: Whatever): Whatever
}

/**
 * this function can either return a string, number
 * function or whatever the explicit type is
 */
export const doThing: DoThing = (arg?: any) => {
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


/** try hovering over each variable */
export const explicitlyTyped = doThing<number[]>([1, 2])

export const asNumber = doThing(1);

export const asString = doThing('hello world');

export const noArg = doThing()