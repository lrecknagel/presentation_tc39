const ints = [1, 2, [3, 4, [5, 6]]];
ints.flat(2);
// [1, 2, 3, 4, 5, 6]

const ints = [1, 2, 3];
ints.flatMap(i => [i * 2]);
// [2, 4, 6]