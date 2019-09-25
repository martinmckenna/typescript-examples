export type InferReturn<T> = T extends (args: any) => infer Return
  ? Return
  : any

export const myFunction = (arg: string) => {

  if (arg === 'hello') {
    return 1;
  }

  return arg.split(',')
}

/** JS typeof can't get the type correctly. BAD */
export const type = typeof myFunction('hello')


/** TypeScript can. GOOD */
export type TypeOfReturn = InferReturn<typeof myFunction>