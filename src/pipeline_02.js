const wombat = { age: 5 };

const double = ...
const add = ...

const someAgeCalcs = add(2, double(wombat.age));

// VS

const someAgeCalcs = wombat.age
  |> double
  |> (_ => add(2, _));

//=> 12