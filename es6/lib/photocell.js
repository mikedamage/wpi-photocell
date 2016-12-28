import _                           from 'lodash';
import wpi, { INPUT, OUTPUT, LOW } from 'wiring-pi';
import EventEmitter                from 'events';
import NanoTimer                   from 'nanotimer';

export class Photocell extends EventEmitter {
  constructor(pin, options = {}) {
    super();
    this.pin = pin;
    this.options = _.assign({}, Photocell.defaults, options);
    this.timer = new NanoTimer();

    wpi.setup('gpio');
  }

  measure() {
    return new Promise((resolve) => {
      wpi.pinMode(this.pin, OUTPUT);
      wpi.digitalWrite(this.pin, LOW);

      this.timer.setTimeout(() => {
        let reading = 0;

        wpi.pinMode(this.pin, INPUT);

        while (wpi.digitalRead(this.pin) === LOW) {
          reading++;
        }

        resolve(reading);
      }, '100m');
    });
  }

  measureSync() {
    let reading = 0;

    wpi.pinMode(this.pin, OUTPUT);
    wpi.digitalWrite(this.pin, LOW);
    wpi.delay(100);
    wpi.pinMode(this.pin, INPUT);

    while (wpi.digitalRead(this.pin) === LOW) {
      reading++;
    }

    return reading;
  }
}

Photocell.defaults = {};

export default Photocell;
