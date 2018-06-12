// what do you think ...
const value = a?.b.c(++x)?.d;

// case 1
const a = undefined;
let x = 0;

// => value: undefined
// => x: 0

// eval to:
const value = a === undefined
  ? undefined
  : a.b.c(++x)
    ? a.b.c(++x).d
    : undefined;

