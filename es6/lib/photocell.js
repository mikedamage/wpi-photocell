import wpi, { INPUT, OUTPUT, LOW } from 'wiring-pi';
import EventEmitter                from 'events';
import NanoTimer                   from 'nanotimer';

/**
 * Represents a single photoresistor wired to a GPIO pin and a capacitor.
 * Light levels are measured by timing how long it takes to fill
 * the capacitor, which is determined by the resistance of the photocell.
 * The photocell's resistance, in turn, is determined by how much light it receives.
 */
export class Photocell extends EventEmitter {
  /**
   * Create a new instance of `Photocell`
   * @param {number} pin - The GPIO pin number on the Raspberry Pi
   * @returns {Object} an instance of `Photocell`
   */
  constructor(pin) {
    super();

    this.pin   = pin;
    this.timer = new NanoTimer();

    wpi.setup('gpio');
  }

  /**
   * Measure light level asynchronously.
   * @fires Photocell#measure
   * @fires Photocell#reading
   * @returns {Promise.<number>} A promise that resolves to the number of loop iterations it took to fill the capacitor
   */
  measure() {
    return new Promise((resolve) => {
      /**
       * Signifies that measurement of light levels has begun
       * @event Photocell#measure
       */
      this.emit('measure');

      wpi.pinMode(this.pin, OUTPUT);
      wpi.digitalWrite(this.pin, LOW);

      this.timer.setTimeout(() => {
        wpi.pinMode(this.pin, INPUT);
        resolve(this._getReading());
      }, '', '100m');
    });
  }

  /**
   * Measure light level synchronously
   * @fires Photocell#measure
   * @fires Photocell#reading
   * @returns {number} The number of loop iterations it took to fill the capacitor
   */
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

    /**
     * Fires when a measurement has completed and a reading is ready
     * @event Photocell#reading
     * @param {number} reading - The reading reported
     */
    this.emit('reading', reading);
    return reading;
  }
}

export default Photocell;
