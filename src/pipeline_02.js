const wombat = { age: 5 };

const double = num => num * 2;
const add = (val, base) => base + val;

const someAgeCalcs = add(2, double(wombat.age));

// VS

const someAgeCalcs = wombat.age
  |> double
  |> (_ => add(2, _));

//=> 12