## Classes

<dl>
<dt><a href="#Photocell">Photocell</a></dt>
<dd><p>Represents a single photoresistor wired to a GPIO pin and a capacitor.
Light levels are measured by timing how long it takes to fill
the capacitor, which is determined by the resistance of the photocell.
The photocell&#39;s resistance, in turn, is determined by how much light it receives.</p>
</dd>
<dt><a href="#Photocell">Photocell</a></dt>
<dd></dd>
</dl>

<a name="Photocell"></a>

## Photocell
Represents a single photoresistor wired to a GPIO pin and a capacitor.
Light levels are measured by timing how long it takes to fill
the capacitor, which is determined by the resistance of the photocell.
The photocell's resistance, in turn, is determined by how much light it receives.

**Kind**: global class  

* [Photocell](#Photocell)
    * [new Photocell(pin)](#new_Photocell_new)
    * [.measure()](#Photocell+measure) ⇒ <code>Promise.&lt;number&gt;</code>
    * [.measureSync()](#Photocell+measureSync) ⇒ <code>number</code>
    * ["measure"](#Photocell+event_measure)
    * ["reading" (reading)](#Photocell+event_reading)

<a name="new_Photocell_new"></a>

### new Photocell(pin)
Create a new instance of `Photocell`

**Returns**: <code>Object</code> - an instance of `Photocell`  

| Param | Type | Description |
| --- | --- | --- |
| pin | <code>number</code> | The GPIO pin number on the Raspberry Pi |

<a name="Photocell+measure"></a>

### photocell.measure() ⇒ <code>Promise.&lt;number&gt;</code>
Measure light level asynchronously.

**Kind**: instance method of <code>[Photocell](#Photocell)</code>  
**Returns**: <code>Promise.&lt;number&gt;</code> - A promise that resolves to the amount of time it took to fill the capacitor (in microseconds)  
**Emits**: <code>[measure](#Photocell+event_measure)</code>, <code>[reading](#Photocell+event_reading)</code>  
<a name="Photocell+measureSync"></a>

### photocell.measureSync() ⇒ <code>number</code>
Measure light level synchronously

**Kind**: instance method of <code>[Photocell](#Photocell)</code>  
**Returns**: <code>number</code> - The amount of time it took to fill the capacitor (in microseconds)  
**Emits**: <code>[measure](#Photocell+event_measure)</code>, <code>[reading](#Photocell+event_reading)</code>  
<a name="Photocell+event_measure"></a>

### "measure"
Signifies that measurement of light levels has begun

**Kind**: event emitted by <code>[Photocell](#Photocell)</code>  
<a name="Photocell+event_reading"></a>

### "reading" (reading)
Fires when a measurement has completed and a reading is ready

**Kind**: event emitted by <code>[Photocell](#Photocell)</code>  

| Param | Type | Description |
| --- | --- | --- |
| reading | <code>number</code> | The reading reported |

<a name="Photocell"></a>

## Photocell
**Kind**: global class  

* [Photocell](#Photocell)
    * [new Photocell(pin)](#new_Photocell_new)
    * [.measure()](#Photocell+measure) ⇒ <code>Promise.&lt;number&gt;</code>
    * [.measureSync()](#Photocell+measureSync) ⇒ <code>number</code>
    * ["measure"](#Photocell+event_measure)
    * ["reading" (reading)](#Photocell+event_reading)

<a name="new_Photocell_new"></a>

### new Photocell(pin)
Create a new instance of `Photocell`

**Returns**: <code>Object</code> - an instance of `Photocell`  

| Param | Type | Description |
| --- | --- | --- |
| pin | <code>number</code> | The GPIO pin number on the Raspberry Pi |

<a name="Photocell+measure"></a>

### photocell.measure() ⇒ <code>Promise.&lt;number&gt;</code>
Measure light level asynchronously.

**Kind**: instance method of <code>[Photocell](#Photocell)</code>  
**Returns**: <code>Promise.&lt;number&gt;</code> - A promise that resolves to the amount of time it took to fill the capacitor (in microseconds)  
**Emits**: <code>[measure](#Photocell+event_measure)</code>, <code>[reading](#Photocell+event_reading)</code>  
<a name="Photocell+measureSync"></a>

### photocell.measureSync() ⇒ <code>number</code>
Measure light level synchronously

**Kind**: instance method of <code>[Photocell](#Photocell)</code>  
**Returns**: <code>number</code> - The amount of time it took to fill the capacitor (in microseconds)  
**Emits**: <code>[measure](#Photocell+event_measure)</code>, <code>[reading](#Photocell+event_reading)</code>  
<a name="Photocell+event_measure"></a>

### "measure"
Signifies that measurement of light levels has begun

**Kind**: event emitted by <code>[Photocell](#Photocell)</code>  
<a name="Photocell+event_reading"></a>

### "reading" (reading)
Fires when a measurement has completed and a reading is ready

**Kind**: event emitted by <code>[Photocell](#Photocell)</code>  

| Param | Type | Description |
| --- | --- | --- |
| reading | <code>number</code> | The reading reported |

