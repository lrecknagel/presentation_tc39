const makeArray = (x, ...rest) => [x, ...rest]
const array_With_2ndArg_1 = makeArray(?, 1, ...);
array_With_2ndArg_1(2, 3, 4)
// [2, 1, 3, 4]

const vec3 = (x, y, z) => [x, y, z];
const vec3WithDefinedY = vec3(?, 10, ?);
vec3WithDefinedY(0, 5);
// [0, 10, 5]