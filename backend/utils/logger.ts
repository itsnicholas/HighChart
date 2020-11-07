/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const info = (param: string | undefined) => {
  console.log(param);
};
  
export const error = (...params: [string | undefined, string]) => {
  console.error(...params);
};