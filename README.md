# wpi-photocell

by Mike Green

A [WiringPi-Node](https://www.npmjs.com/package/wiring-pi) based library for reading analog photoresistors using a Raspberry Pi. It works by timing
how long it takes to charge a capacitor that sits between the photocell and ground. You can find a tutorial on setting up the circuit [on Adafruit](https://learn.adafruit.com/basic-resistor-sensor-reading-on-raspberry-pi/basic-photocell-reading). Conversion of microseconds to lux is planned, but not yet implemented.

## Installation

```sh
npm install --save wpi-photocell
```

## Usage

```js
// As ES5 module:
var Photocell = require('wpi-photocell').Photocell;
var sensor = new Photocell(18); // use GPIO pin 18
```

```js
// As ES6, if you're transpiling it yourself:
import { Photocell } from 'wpi-photocell/es6/lib/photocell';
const sensor = new Photocell(18);
```

### Example

The `measure()` method is asynchronous, returning a promise that resolves to the number of microseconds:

```js
sensor.measure().then((result) => {
  console.log(`It took ${result} microseconds to charge the capacitor`);
});
// => "It took 425.33 microseconds to charge the capacitor"
```

The `Photocell` class also fires events that you can subscribe to:

```js
sensor.on('reading', (result) => console.log(result));
sensor.measure();
// => 425.33
```

There is also a synchronous measurement method that blocks until a result is returned:

```js
let result = sensor.measureSync();
// => 425.33
```

## Documentation

See the [API docs](./doc/api.md)

## License

`wpi-photocell` is released under the terms of the [MIT License](./LICENSE).
