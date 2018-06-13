function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

// class Meetup {
//  ...
//  @readonly
//  bringsFun = true;
//  ...

