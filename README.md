# Disk

Points generator on disk-shaped target

### Example

~~~js
const Disk = require('spb25-disk');

let base = [10, 25],
    radius = 5;

let disk = new Disk(base, radius);

await disk.derive(); // [12.25, 24.44]
~~~


## Install

~~~sh
npm install spb25-disk
~~~


### License

MIT License
