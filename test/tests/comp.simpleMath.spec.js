import { expect } from 'chai';
// import Sinon from 'sinon';

describe('[Component] Card', () => {

  // uncomment the sinon and related lines of fake timers code and restart the test
  // you should notice that the change watch does not work
  it('Simple math test with fake timers', () => {
    // const clock = Sinon.useFakeTimers();
    expect(1 + 1).to.equal(3);
    // clock.tick(1);
    // clock.restore();
  });
});
