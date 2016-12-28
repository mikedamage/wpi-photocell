import _                           from 'lodash';
import wpi, { INPUT, OUTPUT, LOW } from 'wiring-pi';
import EventEmitter                from 'events';
import NanoTimer                   from 'nanotimer';

export class Photocell extends EventEmitter {
  constructor(pin) {
    super();

    this.pin   = pin;
    this.timer = new NanoTimer();

    wpi.setup('gpio');
  }

  measure() {
    return new Promise((resolve) => {
      this.emit('measure');
      wpi.pinMode(this.pin, OUTPUT);
      wpi.digitalWrite(this.pin, LOW);

      this.timer.setTimeout(() => {
        wpi.pinMode(this.pin, INPUT);
        resolve(this._getReading());
      }, '', '100m');
    });
  }

  measureSync() {
    this.emit('measure');
    wpi.pinMode(this.pin, OUTPUT);
    wpi.digitalWrite(this.pin, LOW);
    wpi.delay(100);
    wpi.pinMode(this.pin, INPUT);

    return this._getReading();
  }

  _getReading() {
    let reading = 0;

    while (wpi.digitalRead(this.pin) === LOW) {
      reading++;
    }

    this.emit('reading', reading);
    return reading;
  }
}

export default Photocell;
