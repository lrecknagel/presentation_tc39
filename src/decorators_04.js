function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

const log = (target, name, descriptor) =>
  console.log(`CALLED: ${ name }`);

class Meetup {
  time = 'Thursday';

  @readonly
  bringsFun = true;

  @log
  getTime() {
    return this.time;
  };
};