/* eslint-disable @typescript-eslint/explicit-module-boundary-types */


// Print info to the console
export const info = (param: string | undefined) => {
  console.log(param);
};

// Print error to the console
export const error = (...params: [string | undefined, string]) => {
  console.error(...params);
};