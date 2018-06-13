function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

const log = (target, name, descriptor) =>
  console.log(`CALLED: ${ name }`);


module.exports = class Meetup {
  time = 'Thursday';

  @readonly
  bringsFun = true;

  @log
  getTime() {
    return this.time;
  };

  members = 20;
};