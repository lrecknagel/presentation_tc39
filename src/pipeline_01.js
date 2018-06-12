const isNice = str => `${ str } is nice`;
const capitalize = str => str[0].toUpperCase() + str.substring(1);
const exclaim = str => `${ str }!`;

const result = exclaim(
  capitalize(
    isNice("ddjs")));

//=> "Ddjs is nice!"

// VS

const result = "ddjs"
  |> isNice
  |> capitalize
  |> exclaim;

//=> "Ddjs is nice!"