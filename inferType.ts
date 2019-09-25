/** typed specifically */
const returnString = (arg: string) => {
  return arg;
}

/** can infer types okay */
const betterReturnString = <T>(...arg: T[]) => {
  return arg;
}

/** 
 * infers types without having to supply it 
 * 
 * Changing to _extends any[]_ makes it so you can pass any
 * number of args as any type
 */
const bestReturnString = <T extends string[]>(...arg: T) => {
  return arg;
}

/** try hovering over these */
const good = returnString('hello world')
const better = betterReturnString('hello world', 'hello world 2')
const best = bestReturnString('hello world', 'hello world 2')