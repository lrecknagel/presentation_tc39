class Meetup {
  time = 'Thursday';

  @readonly
  bringsFun = true;

  @log
  getTime() {
    return this.time;
  };

  members = 20;
};