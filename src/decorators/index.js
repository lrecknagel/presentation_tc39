require("babel-register");

const Meetup = require('./dec');

function run() {
  const m = new Meetup();

  m.time = 'Friday?';
  console.log(m);

  m.bringsFun = false;
  console.log(m);

  m.members = 30;
  console.log(m);

  console.log(m.getTime());
}

run();