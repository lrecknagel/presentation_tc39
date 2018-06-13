const log = (target, name, descriptor) =>
  console.log(`CALLED: ${ name }`);

// class Meetup {
//   ...
//   @log
//   getTime() {
//     return this.time;
//   };