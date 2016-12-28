import _                           from 'lodash';
import wpi, { INPUT, OUTPUT, LOW } from 'wiring-pi';
import EventEmitter                from 'events';

export class Photocell extends EventEmitter {
  constructor(pin, options = {}) {
    super();
    this.pin = pin;
    this.options = _.assign({}, Photocell.defaults, options);

    wpi.setup('gpio');
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

Photocell.defaults = {
  timerInterval: 1000,
  timerUnit: 'u'
};

export default Photocell;
